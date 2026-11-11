import { Injectable } from '@nestjs/common';
import { CreateVoitureDto } from './dto/create-voiture.dto.js';
import { Voiture } from './entities/voiture.entity.js';

@Injectable()
export class VoitureService {
  private voitures: Voiture[] = [];
  private nextId = 1;

  create(dto: CreateVoitureDto): Voiture {
    const voiture: Voiture = { id: this.nextId++, ...dto };
    this.voitures.push(voiture);
    return voiture;
  }
}