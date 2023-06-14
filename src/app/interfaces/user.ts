import { Pokemon } from "./pokemon";

export default interface User {
    username: string,
    password: string,
    teamPokemon: Pokemon[],
}