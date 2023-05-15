import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  url = 'http://localhost:3000/tasks';

  constructor() { }

  async getTasks(): Promise<Task[]> {
    const data = await fetch(this.url);
  
    return await data.json() ?? [];
  }
}
