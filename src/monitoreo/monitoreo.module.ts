import { Module } from '@nestjs/common';
import { MonitoreoController } from './controllers/monitoreo/monitoreo.controller';
import { MonitoreoService } from './services/monitoreo/monitoreo.service';
import { Monitoreo } from 'src/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Monitoreo])],
  controllers: [MonitoreoController],
  providers: [MonitoreoService]
})

export class MonitoreoModule {}
