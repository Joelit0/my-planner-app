import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task';

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
      <h1>
        <img src="../assets/logo.png" alt="logo">
        My Planner
      </h1>
      <p>Make your own planner and choose a Pokemon to help you with it!</p>
    </section>

    <section>
      <div class="create-task-container">
        <app-create (newList)="updateList($event)"></app-create>
      </div>

      <div class="tasks-container">
        <app-task class="cards" *ngIf="taskList.length > 0; else elseBlock" [taskList]="taskList"></app-task>
        <ng-template #elseBlock><h1>Crea tu primera tarea</h1></ng-template>
      </div>
    </section>
  `,
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

