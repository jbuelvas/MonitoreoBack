import { Module } from '@nestjs/common';
import { ResultadoController } from './controllers/resultado/resultado.controller';
import { ResultadoService } from './services/resultado/resultado.service';

@Module({
  controllers: [ResultadoController],
  providers: [ResultadoService]
})
export class ResultadoModule {}
