import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  url = 'http://localhost:3000/tasks';

  constructor() {}

  async getTasks(): Promise<Task[]> {
    const data = await fetch(this.url);

    return (await data.json()) ?? [];
  }

  async createTask(
    title: string,
    description: string,
    pokemon: string
  ): Promise<boolean> {
    const data = {
      title: title,
      description: description,
      pokemon: pokemon,
    };
    const response = await fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: '/' },
      body: JSON.stringify(data),
    });
    return response.ok;
  }
}
