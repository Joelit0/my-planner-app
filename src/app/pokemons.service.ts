import { Injectable } from '@angular/core';
import { Pokemon } from './interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  async getPokemons(): Promise<Pokemon[]> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const pokemonResponse = await response.json();
    
    return pokemonResponse.results ?? [];
  }
}
