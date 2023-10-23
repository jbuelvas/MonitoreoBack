import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateMonitoreoDto } from 'src/monitoreo/dtos/CreateMonitoreo.dto';
import { MonitoreoService } from 'src/monitoreo/services/monitoreo/monitoreo.service';

@Controller('monitoreo')
export class MonitoreoController {
  constructor(private readonly monitoreoService: MonitoreoService) {}

  @Post('crear')
  @UsePipes(ValidationPipe)
  createMonitoreo(@Body() createMonitoreoDto: CreateMonitoreoDto) {
    return this.monitoreoService.createMonitoreo(createMonitoreoDto);
  }
}
