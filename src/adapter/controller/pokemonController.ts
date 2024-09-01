import { GetPokemon } from '@business/useCases/getPokemon'
import { PokemonMapper } from '../mappers/pokemonMapper'

export class PokemonController {
    constructor(private readonly _getPokemon: GetPokemon) {}

    async getPokemonHandle(name: string) {
        const pokemon = await this._getPokemon.execute(name)
        return PokemonMapper.toDto(pokemon)
    }
}