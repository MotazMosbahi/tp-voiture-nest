import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
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
  @Get(':id')
  @ApiOperation({ summary: 'Récupérer une voiture par id' })
  @ApiOkResponse({ type: Voiture })
  @ApiNotFoundResponse({ description: 'Voiture introuvable' })
  findOne(@Param('id', ParseIntPipe) id: number): Voiture {
    return this.voitureService.findOne(id);
  }
}