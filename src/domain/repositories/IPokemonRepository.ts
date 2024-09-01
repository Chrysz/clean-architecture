import { Pokemon } from '@domain/entities'

export interface IPokemonRepository {
    getPokemonByName(name: string): Promise<Pokemon>
}