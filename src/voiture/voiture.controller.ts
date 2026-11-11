import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VoitureService } from './voiture.service.js';

@ApiTags('voitures')
@Controller('voitures')
export class VoitureController {
  constructor(private readonly voitureService: VoitureService) {}
}