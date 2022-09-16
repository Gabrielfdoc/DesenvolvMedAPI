import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Medico } from "../entities/medico.entity";
import { MedicoService } from "../services/medico.service";

@ApiTags('Medico')
@Controller('/medico')
export class MedicoController {
    constructor(
        private readonly service: MedicoService
    ) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Medico[]> {
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Medico> {
        return this.service.findById(id)
    }
}