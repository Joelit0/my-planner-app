import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './services/tasks.service';
import { Task } from './interfaces/task';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    CreateComponent,
    TaskComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  taskList: Task[] = [];
  taskService: TasksService = inject(TasksService);
  constructor() {
    this.taskService.getTasks().then((taskList) => {
      this.taskList = taskList;
    });
  } 
  updateList(newContent:Task[]){
    this.taskList = newContent;
  } 
}

