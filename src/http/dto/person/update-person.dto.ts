import { IsEmail, IsOptional, IsString, IsNumber, IsBoolean, ValidateIf, IsNotEmpty } from 'class-validator';
import { apiEnv } from '../../../config/env';

export class UpdatePersonDto {
  @IsOptional()
  @IsString({ message: 'Nombre de la empresa inválido' })
  @ValidateIf((o) => apiEnv.COMPANY_MANDATORY_DOCUMENTS.includes(o.idType as string))
  @IsNotEmpty({ message: 'El nombre de la empresa es obligatorio para el tipo de documento seleccionado' })
  companyName?: string;

  @IsOptional()
  @IsString({ message: 'Primer Nombre inválido' })
  @ValidateIf((o) => !apiEnv.COMPANY_MANDATORY_DOCUMENTS.includes(o.idType as string))
  @IsNotEmpty({ message: 'El primer nombre es obligatorio para el tipo de documento seleccionado' })
  firstName?: string;

  @IsOptional()
  @IsString({ message: 'Segundo Nombre inválido' })
  secondName?: string;

  @IsOptional()
  @IsString({ message: 'Primer Apellido inválido' })
  @ValidateIf((o) => !apiEnv.COMPANY_MANDATORY_DOCUMENTS.includes(o.idType as string))
  @IsNotEmpty({ message: 'El primer apellido es obligatorio para el tipo de documento seleccionado' })
  firstLastName?: string;

  @IsOptional()
  @IsString({ message: 'Segundo Apellido inválido' })
  secondLastName?: string;

  @IsOptional()
  @IsEmail({}, { message: 'El correo debe ser válido' })
  email: string;

  @IsOptional()
  @IsBoolean({ message: 'authorizeCellPhoneMessages debe ser booleano' })
  authorizeCellPhoneMessages: boolean;

  @IsOptional()
  @IsBoolean({ message: 'authorizeEmailMessages debe ser booleano' })
  authorizeEmailMessages: boolean;
}
