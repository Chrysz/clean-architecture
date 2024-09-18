import { Pokemon } from '@domain/entities/pokemon'
import { PokemonRepository } from '@domain/repositories/pokemonRepository'

export class GetPokemonUseCase {
    constructor(
        private readonly _pokemonRepository: PokemonRepository
    ) {}

    async execute(name: string): Promise<Pokemon> {
        const pokemon = await this._pokemonRepository.getPokemonByName(name)

        if(!pokemon)
            throw new Error('Pokemon not found')

        return pokemon 
    }
}