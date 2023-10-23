import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMonitoreoDto } from 'src/monitoreo/dtos/CreateMonitoreo.dto';
import { Monitoreo } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MonitoreoService {
  constructor(
    @InjectRepository(Monitoreo) private readonly monitoreoRepository: Repository<Monitoreo>,
  ) {}

  createMonitoreo(createMonitoreoDto: CreateMonitoreoDto) {
    const newObject = this.monitoreoRepository.create(createMonitoreoDto);
    return this.monitoreoRepository.save(newObject);
  }
}
