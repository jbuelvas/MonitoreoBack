import { HttpException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { catchError, map } from 'rxjs';
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
        nombre: body.proveedor
      }
    });

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
    //body.gf_coordenadas = [[[-83.37248180344046,8.670745141205892],[-83.02091930344055,8.670745141205892],[-83.02091930344055,8.99642510720258],[-83.37248180344046,8.99642510720258],[-83.37248180344046,8.670745141205892]]]
    
    const dataSent = JSON.stringify({
      item_types: body.item_types,
      filter: {
        type: body.filter_type,
        config: this.validacionConfigType(body),
      },     
    });

    const requestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
      auth: {
        username: proveedor[0].api_key,
        password: '',
      },
    };
      
    return this.httpService.post(proveedor[0].url_consulta_imagen, dataSent, requestConfig).pipe(
        map((response) => {
          console.log(response);
          
          return response.data;
        }),
        catchError(e => {
          console.log(e);
          
          throw new HttpException(e.response.data, e.response.status);
        }),
      );
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
}
