import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength, Length, MinLength  } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Comentario } from "../../comentario/entities/comentario.entity";

@Entity('tb_cadastros')
export class Cadastro {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @Length(11)
    @Column({ nullable: false, unique: true, length: 11 })
    cpf: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    nome: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, length: 255 })
    sobrenome: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @MinLength(4)
    @Column({ nullable: false, length: 255 })
    senha: string

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({ nullable: false, unique: true ,length: 255 })
    email: string

    
    @OneToMany(() => Comentario, (comentarioRealizado) => comentarioRealizado.cadastro)
    @ApiProperty({type: () => Comentario})
    comentarios: Comentario[]
}