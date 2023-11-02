import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalisisModule } from './analisis/analisis.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PlanModule } from './plan/plan.module';
import { MonitoreoModule } from './monitoreo/monitoreo.module';
import { ResultadoModule } from './resultado/resultado.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AreaInteresModule } from './area-interes/area-interes.module';
import entities from './typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    CustomersModule,
    AnalisisModule,
    UsuarioModule,
    PlanModule,
    MonitoreoModule,
    ResultadoModule,
    ProveedorModule,
    HttpModule,
    AreaInteresModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
