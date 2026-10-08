import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service.js';
import { CreateCustomerDto } from './dto/create-customer.dto.js';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Get()
    getAll() {
        return this.customerService.getAllCustomers();
    }

    @Post()
    create(@Body() data: CreateCustomerDto) {
        return this.customerService.createCustomer(data);
    }
}
