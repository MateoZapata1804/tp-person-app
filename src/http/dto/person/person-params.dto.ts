import { IsNumberString, IsString } from 'class-validator';

export class PersonDocumentParamsDto {
  @IsString({ message: 'Tipo de identificación no válido' })
  idType: string;

  @IsNumberString({}, { message: 'Número de identificación no válido' })
  idNumber: string;
}
