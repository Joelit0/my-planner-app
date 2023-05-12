import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../pokemon'

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule],
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
}
