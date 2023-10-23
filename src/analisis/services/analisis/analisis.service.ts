import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Analisis } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AnalisisService {
  constructor(
    @InjectRepository(Analisis) private readonly userRepository: Repository<Analisis>,
  ) {}

  getAnalisis() {
    return this.userRepository.find();
  }
}
