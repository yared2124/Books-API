import { Controller,Get,Post,Put,Delete,Param, } from "@nestjs/common";
import {BookService} from "./books.service.js"

@Controller('books')
export class BookController{
    constructor(private readonly bookService: BookService){}
   @Get()
   findAll():string{
    return this.bookService.findAll();
   }
   @Get('id')
   findOne(@Param('id') id: string): string{
  return this.bookService.findOne(+id);
   }
    @Post()
    create():string{
        return this.bookService.create();
    }
   @Put('id')
   update(@Param('id') id:string) :string{
    return this.bookService.update(+id);
   }
   @Delete('id')
   remove(@Param('id') id: string) : string{
    return this.bookService.remove(+id);
   }

}