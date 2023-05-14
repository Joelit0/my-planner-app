import { Injectable } from '@angular/core';
import { Task } from './task';

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

  // async createTask(title: string, description: string, pokemon: string): Promise<Task> {
  //   const data = {
  //     title: title,
  //     description: description,
  //     pokemon: pokemon
  //   }

  //   const response = await fetch(this.url, {
  //     method: 'POST',
  //     body: JSON.stringify(data)
  //   });

  //   return await response.json() ?? [];
  // }  
  async createTask(title: string, description: string, pokemon: string): Promise<Task> {
    const data = new FormData();
    data.append('title', title);
    data.append('description', description);
    data.append('pokemon', pokemon);
  
    const response = await fetch(this.url, {
      method: 'POST',
      body: data
    });
  
    return await response.json() ?? [];
  } 
  
}
