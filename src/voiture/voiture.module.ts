import { Module } from '@nestjs/common';
import { VoitureService } from './voiture.service.js';
import { VoitureController } from './voiture.controller.js';

@Module({
  providers: [VoitureService],
  controllers: [VoitureController]
})
export class VoitureModule {}
