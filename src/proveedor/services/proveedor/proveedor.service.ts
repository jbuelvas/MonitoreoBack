import { HttpException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';
import { ProveedorDto } from 'src/proveedor/dtos/Proveedor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedor } from 'src/typeorm';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor) 
    private proveedorRepo: Repository<Proveedor>,
    private readonly httpService: HttpService
  ) { }

  // async consultarProveedor(data: ProveedorDto) {
  //   try {
  //     const resultados = await this.proveedorRepo.find({
  //       where: { 
  //         nombre: data.nombre
  //       }
  //     });
      
  //     return resultados;
  //   } catch (error) {
  //     console.error(error);
  //     throw new InternalServerErrorException(
  //       `Problemas encontrando el proveedor por nombre: ${error}`,
  //     );
  //   }
  // }

  async consultaImagenes(body: ProveedorDto) {
    const proveedor = await this.proveedorRepo.find({
      where: { 
        nombre: body.proveedor,
        activo: true
      }
    });

    if(proveedor.length > 0){
      let dataSent;
      let requestConfig;

      const prov = proveedor[0]

      if(body.proveedor == process.env.PROV_SENTINEL){
        console.log(proveedor);
        //const token = await this.getToken(prov.url_access_token, prov.client_id, prov.client_secret)
        const token = await lastValueFrom(this.getToken(prov.url_access_token, prov.client_id, prov.client_secret));
        console.log(token);

        requestConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        };

        dataSent = JSON.stringify({
          "datetime": `${body.fecha_inicial}T00:00:00Z/${body.fecha_final}T00:00:00Z`,
          "collections": ["sentinel-1-grd"],
          "intersects": {
            "type": "Polygon",
            "coordinates": body.coordenadas
          }
        });    
      }
      else{
        if(body.proveedor == process.env.PROV_PLANET){
          console.log(`pROVEEDOR: ${process.env.PROV_SENTINEL}`);
  
          body.item_types = ["PSScene"]
          body.filter_type = "AndFilter"
          body.config_type = ["GeometryFilter", "DateRangeFilter", "RangeFilter"]
          body.gf_field_name = "geometry"
          body.gf_type = "Polygon"
          body.drf_field_name = "acquired"
          body.rf_field_name = "cloud_cover"
          body.rf_gte = 0
          body.rf_lte = body.cobertura_nubes
          body.gf_coordenadas = body.coordenadas
          body.drf_gte = `${body.fecha_inicial}T00:00:00Z`
          body.drf_lte = `${body.fecha_final}T00:00:00Z`
          
          dataSent = JSON.stringify({
            item_types: body.item_types,
            filter: {
              type: body.filter_type,
              config: this.validacionConfigType(body),
            },     
          });
      
          requestConfig = {
            headers: {
              'Content-Type': 'application/json',
            },
            auth: {
              username: prov.api_key,
              password: '',
            },
          };
        }
      }

      return this.httpService.post(prov.url_consulta_imagen, dataSent, requestConfig).pipe(
        map((response) => {
          return response.data;
        }),
        catchError(e => {                
          throw new HttpException(e.response.data, e.response.status);
        }),
      );
    }
    else{
      return { 'error': `Proveedor ${body.proveedor} no encontrado` }
    }
  }

  validacionConfigType(data: ProveedorDto) {
    let config = [];
    let prevConfig = {};

    for (const element of data.config_type) {
      if (element == 'DateRangeFilter') {
        prevConfig = {
          type: element,
          field_name: data.drf_field_name,
          config: {
            gte: data.drf_gte,
            lte: data.drf_lte,
          },
        };
      }

      if (element == 'GeometryFilter') {
        prevConfig = {
          type: element,
          field_name: data.gf_field_name,
          config: {
            type: data.gf_type,
            coordinates: data.gf_coordenadas,
          },
        };
      }

      if (element == 'NumberInFilter') {
        prevConfig = {
          type: element,
          field_name: data.nif_field_name,
          config: data.af_config,
        };
      }

      if (element == 'RangeFilter') {
        prevConfig = {
          type: element,
          field_name: data.rf_field_name,
          config: {
            gte: data.rf_gte,
            lte: data.rf_lte,
          },
        };
      }

      if (element == 'StringInFilter') {
        prevConfig = {
          type: element,
          field_name: data.sif_field_name,
          config: data.sif_config,
        };
      }

      if (element == 'UpdateFilter') {
        prevConfig = {
          type: element,
          field_name: data.uf_field_name,
          config: {
            gt: data.uf_gte,
          },
        };
      }

      if (element == 'AssetFilter') {
        prevConfig = {
          type: element,
          config: data.af_config,
        };
      }

      if (element == 'PermissionFilter') {
        prevConfig = {
          type: element,
          config: data.af_config,
        };
      }

      config.push(prevConfig);
    }

    return config;
  }

  getToken(url: string, id: string, secret: string) {
    const token_url = url;

    const requestConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: id,
        password: secret,
      },
    };

    console.log('getToken');
    console.log(requestConfig);

    // const token = this.httpService
    //   .post(token_url, {}, requestConfig)
    //   .pipe(map((response) => response.data.access_token));
    
    const token = this.httpService.post(token_url, { 'grant_type': 'client_credentials' }, requestConfig).pipe(
        map((response) => {
          console.log('response');
          console.log(response);
          return response.data.access_token;
        }),
        catchError(e => {
          console.log('error');
          console.log(e);
          throw new HttpException(e.response.data, e.response.status);
        }),
      );

    return token;
  }
}
