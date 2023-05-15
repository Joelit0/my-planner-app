import { Component, Input, Output, inject, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../interfaces/pokemon'
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TasksService } from '../tasks.service';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
  updatedTaskList: Task[] = [];
  @Output() newList = new EventEmitter<Task[]>;

  pokemonsList: Pokemon[] = [];
  pokemonService: PokemonsService = inject(PokemonsService);

  constructor(private taskService: TasksService) {
    this.pokemonService.getPokemons().then((pokemonsList) => {
      this.pokemonsList = pokemonsList;
    });
  }

  addForm = new FormGroup({
    title : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    pokemons: new FormControl('', Validators.required)
  })


  async createTask(addForm: FormGroup): Promise<void> {
    const task = await this.taskService.createTask(addForm.value.title, addForm.value.description, addForm.value.pokemons);
    await this.taskService.getTasks().then((taskList) => {
      this.updatedTaskList = taskList;
    });
    this.newList.emit(this.updatedTaskList);
  }
}








