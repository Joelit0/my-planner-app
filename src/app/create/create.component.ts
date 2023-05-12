import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../pokemon'

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Title">
        <input type="text" placeholder="Description">
        <select name="pokemons" id="pokemons">
          <option value="">Select a pokemon</option>
          <option *ngFor="let pokemon of pokemonsList" value="pokemon.name">
            {{pokemon.name}}
          </option>
        </select>
        <button class="button">Add</button>
      </form>
    </section>
  `,
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
  pokemonsList: Pokemon[] = [];
  pokemonService: PokemonsService = inject(PokemonsService);

  constructor() {
    this.pokemonService.getPokemons().then((pokemonsList) => {
      this.pokemonsList = pokemonsList.results;
    });
  }
}
