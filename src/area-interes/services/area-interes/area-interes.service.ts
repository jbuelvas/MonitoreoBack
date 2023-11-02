import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrearAreaInteresDto } from 'src/area-interes/dtos/CrearAreaInteres.dto';
import { AreaInteres, Usuario } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AreaInteresService {
  constructor(
    @InjectRepository(AreaInteres)
    private areaInteresRepo: Repository<AreaInteres>,
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
  ) {}

  async crearAreaInteres(data: CrearAreaInteresDto) {
    try {
      const usuario = await this.usuarioRepo.findOne({
        where: {
          id: data.id_usuario,
          activo: true
        },
      });

      if(usuario == undefined || usuario == null){
        return { "success":false, "message": "Usuario no encontrado"}
      }
      else{
        const areaInteres = await this.areaInteresRepo.findOne({
          where: {
            coordenadas: data.coordenadas,
            usuario: usuario,
            activo: true
          },
        });

        if(areaInteres){
          return { "success":false, "message": "El área de interés ya se encuentra registrada en el sistema"}
        }
        else{
          const newAreaInteres = this.areaInteresRepo.create(data);

          if (data.id_usuario) {
            newAreaInteres.usuario = usuario;
          }
    
          this.areaInteresRepo.save(newAreaInteres);
          return { "success":true, "message": "Área de interés registrada con éxito"}
        }
      }      
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        `Se presentaron inconvenientes al crear el área de interés: ${error}`,
      );
    }
  }
}
