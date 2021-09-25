import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

	constructor(private readonly todoService: TodoService) {}

	@Get()
	async getAllTodos(): Promise<any> {
		return await this.todoService.getAllTodos();
	} 

	@Put('/:id')
	async editTask(@Param('id') id: string, @Body() editDTO: any): Promise<any> {
		return await this.todoService.editTask(id, editDTO);
	}
}
