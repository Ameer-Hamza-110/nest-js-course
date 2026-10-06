import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserController } from './user/user.controller.js';
import { ProductService } from './product/product.service.js';
import { ProductController } from './product/product.controller.js';
import { ProductModule } from './product/product.module.js';
import { EmployeeModule } from './employee/employee.module.js';

@Module({
  imports: [ProductModule, EmployeeModule],
  controllers: [AppController, UserController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
