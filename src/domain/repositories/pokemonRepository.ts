import { Pokemon } from '@domain/entities/pokemon'

export interface PokemonRepository {
    getPokemonByName(name: string): Promise<Pokemon>
}