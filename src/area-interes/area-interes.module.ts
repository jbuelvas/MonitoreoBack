import { Module } from '@nestjs/common';
import { AreaInteresController } from './controllers/area-interes/area-interes.controller';
import { AreaInteresService } from './services/area-interes/area-interes.service';
import { Usuario } from 'src/typeorm/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from 'src/usuario/controllers/usuario/usuario.controller';
import { UsuarioService } from 'src/usuario/services/usuario/usuario.service';
import { AreaInteres } from 'src/typeorm/area_interes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AreaInteres, Usuario])],
  controllers: [AreaInteresController, UsuarioController],
  providers: [AreaInteresService, UsuarioService],
})
export class AreaInteresModule {}
