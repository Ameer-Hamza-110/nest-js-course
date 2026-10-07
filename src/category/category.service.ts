import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    getCategories(){
        return ["mobile", "tablet", "laptop", "desktop"];
    }
}
