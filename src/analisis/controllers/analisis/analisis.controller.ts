import { Controller, Get } from '@nestjs/common';
import { AnalisisService } from 'src/analisis/services/analisis/analisis.service';

@Controller('analisis')
export class AnalisisController {
  constructor(private readonly analisisService: AnalisisService) {}

  @Get('todos')
  getAnalisis() {
    return this.analisisService.getAnalisis();
  }
}
