import { GetPokemonUseCase } from '@business/useCases/getPokemonUseCase'
import { PokemonInfoShowDto } from '@adapter/dtos/pokemonInfoShowDto'
import { PokemonInfoMapper } from '@adapter/mappers/pokemonInfoMapper'

export class PokemonApiPresenter {
    constructor(private readonly _getPokemonUseCase: GetPokemonUseCase) {}

    async showPokemonData(name: string): Promise<PokemonInfoShowDto> {
        const pokemon = await this._getPokemonUseCase.execute(name)
        return PokemonInfoMapper.ToInfoShowDto(pokemon)
    }
}