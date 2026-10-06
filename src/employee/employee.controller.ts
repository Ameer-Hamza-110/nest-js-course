import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
    getUser() {
        return "Employee data fetched successfully!"
    }
}
