import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsService } from '../services/pokemons.service';
import { Pokemon } from '../interfaces/pokemon'
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
