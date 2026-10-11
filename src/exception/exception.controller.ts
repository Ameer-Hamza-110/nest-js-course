import { Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from '../http-exception/http-exception.filter.js';


@UseFilters(HttpExceptionFilter)
@Controller('exception')
export class ExceptionController {
    @Get("hello/:id")
    getHello(@Param("id", ParseIntPipe) id: number) {
        return { message: `Hello, your id is ${id}` }
    }
}
