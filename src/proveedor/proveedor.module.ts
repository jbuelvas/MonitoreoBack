import { Module } from '@nestjs/common';
import { ProveedorController } from './controllers/proveedor/proveedor.controller';
import { ProveedorService } from './services/proveedor/proveedor.service';
import { HttpModule, HttpService } from '@nestjs/axios/dist';
import { Proveedor } from 'src/typeorm/proveedor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Proveedor
    ]),
    HttpModule
  ],
  controllers: [ProveedorController],
  providers: [ProveedorService]
})
export class ProveedorModule {}
