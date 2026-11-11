import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateVoitureDto } from './dto/create-voiture.dto.js';
import { Voiture } from './entities/voiture.entity.js';
import { VoitureService } from './voiture.service.js';

@Controller('voitures')
@ApiTags('Voitures')
export class VoitureController {
  constructor(private readonly voitureService: VoitureService) {}

  @Post()
  @ApiOperation({ summary: 'Ajouter une voiture' })
  @ApiCreatedResponse({ type: Voiture })
  create(@Body() dto: CreateVoitureDto): Voiture {
    return this.voitureService.create(dto);
  }
  @Get()
  @ApiOperation({ summary: 'Lister toutes les voitures' })
  @ApiOkResponse({ type: [Voiture] })
  findAll(): Voiture[] {
    return this.voitureService.findAll();
  }
}