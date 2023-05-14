import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../interfaces/pokemon'
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
  pokemonsList: Pokemon[] = [];
  pokemonService: PokemonsService = inject(PokemonsService);

  constructor() {
    this.pokemonService.getPokemons().then((pokemonsList) => {
      this.pokemonsList = pokemonsList;
    });
  }

  addForm = new FormGroup({
    title : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    pokemons: new FormControl('', Validators.required)
  })
}








