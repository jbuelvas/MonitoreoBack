import { Module } from '@nestjs/common';
import { PlanController } from './controllers/plan/plan.controller';
import { PlanService } from './services/plan/plan.service';

@Module({
  controllers: [PlanController],
  providers: [PlanService]
})
export class PlanModule {}
