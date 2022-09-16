import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length, MaxLength } from "class-validator";

export class CadastroTemporarioMedicoDTO {

    @ApiProperty()
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @Length(11)
    cpf: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    nome: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    sobrenome: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    senha: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    email: string

    @ApiProperty()
    @Length(13)
    crm: string
}