import { Body, Controller, Post } from '@nestjs/common';
import { ProveedorDto } from 'src/proveedor/dtos/Proveedor.dto';
import { ProveedorService } from 'src/proveedor/services/proveedor/proveedor.service';

@Controller('proveedor')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) { }

  @Post('consulta-imagenes')
  //@UseGuards(AuthGuard('jwt'))
  consultaRapida(@Body() payload: ProveedorDto) {
    return this.proveedorService.consultaImagenes(payload);
  }
}
