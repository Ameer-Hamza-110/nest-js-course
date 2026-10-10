import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../guards/roles/roles.guard.js';
import { Roles } from '../guards/roles/roles.decorator.js';
import { Role } from '../guards/roles/roles.enum.js';

@Controller('user-role')
export class UserRoleController {

    @Get('admin')
    @Roles(Role.Admin)
    @UseGuards(RolesGuard)
    getadmin() {
        return { message: "You are an admin" }
    }


    @Get('user')
    getuser() {
        return { message: "You are a user" }
    }

}
