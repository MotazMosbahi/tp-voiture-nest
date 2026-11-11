import { ApiProperty } from '@nestjs/swagger';

export class Voiture {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Clio' })
  nom: string;

  @ApiProperty({ example: 'Renault' })
  prenom: string;

  @ApiProperty({ example: 5, description: 'Nombre de chevaux fiscaux' })
  nbrCv: number;
}