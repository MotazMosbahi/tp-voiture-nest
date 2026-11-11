import { Injectable, NotFoundException } from '@nestjs/common';
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
    findAll(): Voiture[] {
    return this.voitures;
  }
  findOne(id: number): Voiture {
    const voiture = this.voitures.find((v) => v.id === id);
    if (!voiture) {
      throw new NotFoundException(`Voiture ${id} introuvable`);
    }
    return voiture;
  }
}