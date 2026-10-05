import {Injectable} from '@nestjs/common';


@Injectable()
export class BookService {


   private books = [
    {
      id:1,
      title: 'Book 1',
      author: 'Author 1'
    },
    {
      id:2,
      title:'book 2',
      author: 'auther  2'

    }
   ];

   findAll() {
    return this.books;
   }
   findOne(id: number){
     return this.books.find(book => book.id === id);
   }
   create(book:{title: string; auther: string}) {
     const newBook = {
      id: this.books.length + 1,
      title: this.book.title,
      auther: this.book.author,
     }
     this.books.push(newBook);
   } 
   update(id:number, bookData: {title: string; author: string}){
    const book = this.books.find((book)=>{book.id === id});
    if(!book){
      return'book not found';
    }

    book.title = bookData.title;
    book.author = bookData.author;

    return book;
   }   
   remove(id:number){
    const bookIndex = this.books.findIndex((book)=>
      book.id === id,
    );
     if (bookIndex === -1){
      return 'book not found'
     }
     return this.books.splice(bookIndex, 1)
   }
    }
