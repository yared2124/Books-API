import { Controller,Get,Post,Put,Delete,Param,Body } from "@nestjs/common";
import {BookService} from "./books.service.js"

@Controller('books')
export class BookController{
    constructor(private readonly bookService: BookService){}
   @Get()
   findAll(){
    return this.bookService.findAll();
   }
   @Get(':id')
   findOne(@Param('id') id: string){
  return this.bookService.findOne(+id);
   }
    @Post()
    create(@Body() book:{title:string; auther: string},){
        return this.bookService.create(book);
    }
    
   @Put('id')
   update(
    @Param('id') id:string,
    @Body() bookData: {title: string; author: string},
  ){
    return this.bookService.update(+id,bookData);
   }
   @Delete('id')
   remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
   }

}