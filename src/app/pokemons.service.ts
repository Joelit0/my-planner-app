import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  async getPokemons(): Promise<any> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    return await response.json() ?? [];
  }
}
