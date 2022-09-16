import { IsNotEmpty, MaxLength } from "class-validator";
import { Expose } from "class-transformer";
import { ComentarioDTO } from "../../comentario/models/comentarioDTO";
import { ApiProperty } from "@nestjs/swagger";

export class PostagemDTO {

    @ApiProperty()
    @Expose({name: "id"})
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Expose({name: "titulo"})
    titulo: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(5000)
    @Expose({name: "descricao"})
    descricao: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(500)
    @Expose({name: "anexo"})
    anexo: string

    @ApiProperty()
    @IsNotEmpty()
    @Expose({name: "data_postagem"})
    dataPostagem: Date

    @ApiProperty()
    @Expose({name: "tema_id"})
    tema: number

    @ApiProperty()
    @Expose({name: "medico_id"})
    medico: number

    @ApiProperty()
    @Expose({name: "comentarios"})
    comentarios: ComentarioDTO[]
}