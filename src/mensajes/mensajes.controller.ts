import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {
    constructor(private mensajeService: MensajesService) {}

    @Post()
    create(@Body() createMensajeDTO: CreateMensajeDto, @Res() response) {
        this.mensajeService.createMensaje(createMensajeDTO).then(mensaje => {
            response.status(HttpStatus.CREATED).json(mensaje);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la creacion'});
        });
    }

    @Get()
    getAll(@Res() response) {
        this.mensajeService.getAll().then(mensajesList => {
            response.status(HttpStatus.OK).json(mensajesList);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la obtencion de los mensajes'});
        });
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto, @Res() response, @Param('id') idMensaje) {
        this.mensajeService.updateMensaje(idMensaje, updateMensajeDto).then( mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la edicion del mensaje'});
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idMensaje) {
        this.mensajeService.deleteMensaje(idMensaje).then( res => {
            response.status(HttpStatus.OK).json(res);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'error en la eliminacion del mensaje'});
        });
    }
}
