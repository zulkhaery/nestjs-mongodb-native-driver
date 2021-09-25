import { Inject, Injectable } from '@nestjs/common';
import * as mongodb from 'mongodb';

interface dbModel {
	find: any,
	findOneAndUpdate: any,
}

@Injectable()
export class TodoService  {
	
	private todo: dbModel;

    constructor(@Inject('DATABASE_CONNECTION') private  mongoo: mongodb.Db) {
		this.todo = mongoo.collection('todo');
	 }

    async getAllTodos(): Promise<any[]> {
		let document = await this.todo.find();
        return document.toArray();
    }

	async editTask(_id: string, editDTO: any): Promise<any> {
		let document =  await this.todo.findOneAndUpdate({ _id: _id }, { $set: editDTO }, { upsert: false, returnDocument: 'after'});
		return document.value;
	}
}