import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from '../common/pipes/uppercase/uppercase.pipe.js';

@Controller('myname')
export class MynameController {
    @Post("create")
    createAndTransformName(@Body("name", new UppercasePipe()) name: string) {
        return { message: `Your name is ${name}` };
    }
}
