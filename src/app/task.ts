import { Pokemon } from "./pokemon";

export interface Task {
  id: number;
  title: string;
  description: string;
  pokemon: Pokemon["name"];
}
