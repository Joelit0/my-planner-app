import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksService } from '../tasks.service';


// @Component({
//   selector: 'app-create',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <section>
//       <form>
//         <input type="text" placeholder="Title">
//         <input type="text" placeholder="Description">
//         <select name="pokemons" id="pokemons">
//           <option value="">Select a pokemon</option>
//         </select>
//         <button type="button">Add</button>
//       </form>
//     </section>
//   `,
//   styleUrls: ['./create.component.css']
// })

// export class CreateComponent {
//   title = '';
//   description = '';
//   pokemon = '';

//   constructor(private taskService: TasksService) { }

//   async createTask(): Promise<void> {
//     const task = await this.taskService.createTask(this.title, this.description, this.pokemon);
//     console.log('Nueva tarea creada:', task);
//   }
// }

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Title" #titleInput>
        <input type="text" placeholder="Description" #descriptionInput>
        <select name="pokemons" id="pokemons" #pokemonInput>
          <option value="">Select a pokemon</option>
        </select>
        <button type="button" (click)="createTask(titleInput.value, descriptionInput.value, pokemonInput.value)">Add</button>
      </form>
    </section>
  `,
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
  constructor(private taskService: TasksService) { }

  async createTask(title: string, description: string, pokemon: string): Promise<void> {
    const task = await this.taskService.createTask(title, description, pokemon);
    console.log('Nueva tarea creada:', task);
  }
}








