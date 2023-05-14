import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { Task } from './task';
//import { title } from 'process';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CreateComponent,
    TaskComponent,
    CommonModule
  ],
  template: `
    <section class="title">
      <h1>My Planner</h1>
      <p>Make your own tasks...</p>
    </section>

    <section>
      <div class="create-task-container">
        <app-create></app-create>
      </div>

      <div class="tasks-container">
        <app-task *ngFor="let task of taskList" [task]="task"></app-task>
      </div>
    </section>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  taskList: Task[] = [];
  taskService: TasksService = inject(TasksService);
  taskListLength: number = this.taskList.length;

  constructor() {
    this.taskService.getTasks().then((taskList) => {
      this.taskList = taskList;
    });
  }  
}
