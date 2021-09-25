import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [DatabaseModule],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
