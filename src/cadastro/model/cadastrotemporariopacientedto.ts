import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, Length, MaxLength } from "class-validator";

export class CadastroTemporarioPacienteDTO {

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

    @ApiPropertyOptional({
        type: String,
        description: 'Essa é uma propriedade opcional.'
    })
    @MaxLength(500)
    convenio: string
}