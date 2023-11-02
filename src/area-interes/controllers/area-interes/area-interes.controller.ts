import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CrearAreaInteresDto } from 'src/area-interes/dtos/CrearAreaInteres.dto';
import { AreaInteresService } from 'src/area-interes/services/area-interes/area-interes.service';

@ApiTags('Área Interés')
@Controller('area-interes')
export class AreaInteresController {
  constructor(
    private areaInteresService: AreaInteresService,
  ) { }
  
  @Post('crear')
  //@UseGuards(AuthGuard('jwt'))
  createAreaInteres(@Body() payload: CrearAreaInteresDto) {
    return this.areaInteresService.crearAreaInteres(payload);
  }
}
