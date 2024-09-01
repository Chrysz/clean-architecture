import { Pokemon } from '@domain/entities';
import { IPokemonRepository } from '@domain/repositories/IPokemonRepository'

export class RestApiPokemonRepository implements IPokemonRepository {
    constructor(private readonly baseUrl: string) {}

    async getPokemonByName(name: string): Promise<Pokemon> {
        const response = await fetch(`${this.baseUrl}/pokemon/${name}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        
        if (!response.ok)
            throw new Error(`Error fetching pokemon: ${response.statusText}`)

        return await response.json() as Pokemon
    }
}