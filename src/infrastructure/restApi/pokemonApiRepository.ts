import { Pokemon } from '@domain/entities/pokemon'
import { PokemonRepository } from '@domain/repositories/pokemonRepository'

export class PokemonApiRepository implements PokemonRepository {
    constructor(private readonly _baseUrl: string) {}

    async getPokemonByName(name: string): Promise<Pokemon> {
        const response = await fetch(`${this._baseUrl}/api/v2/pokemon/${name.toLowerCase()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()

        return {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            spriteDefault: data.sprites.other['official-artwork'].front_default,
            spriteShiny: data.sprites.other['official-artwork'].front_shiny
        }
    }
}