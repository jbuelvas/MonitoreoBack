import { Module } from '@nestjs/common';
import { AnalisisController } from './controllers/analisis/analisis.controller';
import { AnalisisService } from './services/analisis/analisis.service';
import { Analisis } from 'src/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Analisis])],
  controllers: [AnalisisController],
  providers: [AnalisisService]
})
export class AnalisisModule {}
