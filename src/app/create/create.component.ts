import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        </select>
        <button type="button">Add</button>
      </form>
    </section>
  `,
  styleUrls: ['./create.component.css']
})

export class CreateComponent {

}
