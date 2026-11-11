import { ApiProperty } from '@nestjs/swagger';

export class CreateVoitureDto {
  @ApiProperty({ example: 'Clio' })
  nom: string;

  @ApiProperty({ example: 'Renault' })
  prenom: string;

  @ApiProperty({ example: 5 })
  nbrCv: number;
}