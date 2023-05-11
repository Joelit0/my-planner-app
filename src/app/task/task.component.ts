import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="task">
      <h2 class="title">{{ task.title }}</h2>
      <hr>
      <p class="description">{{ task.description }}</p>
      <hr>
      <p class="pokemon">Pokemon: {{ task.pokemon }}</p>
    </section>
  `,
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
  @Input() task!: Task;
}
