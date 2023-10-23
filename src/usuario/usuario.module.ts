import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/usuario/usuario.controller';
import { UsuarioService } from './services/usuario/usuario.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule {}
