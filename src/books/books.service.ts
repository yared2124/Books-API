import {Injectable} from '@nestjs/common';


@Injectable()
export class BookService {
   findAll(): string{
    return 'return all books';
   }
   findOne(id: number): string{
    return `return book with id ${id}`
   }
   create() : string{
     return 'book created successfully'
   } 
   update(id:number):string{
    return `book with id ${id} updated successfully`
   }   
   remove(id:number):string{
    return `book with id ${id} deleted successfully`
   }
    }
