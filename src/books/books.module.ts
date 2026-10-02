import { Module } from "@nestjs/common";
import { BookController } from "./books.controller.js";
import { BookService } from "./books.service.js";

@Module({
    imports: [],
    controllers: [BookController],
    providers: [BookService],
})

export class BooksModule {}