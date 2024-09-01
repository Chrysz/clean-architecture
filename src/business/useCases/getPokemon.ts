import { IPokemonRepository } from '@domain/repositories/IPokemonRepository'
import { Pokemon } from '@domain/entities'

export class GetPokemon {
    constructor(private readonly _repository: IPokemonRepository) {}

    async execute(name: string): Promise<Pokemon> {
        return await this._repository.getPokemonByName(name)
    }
}