import { PokemonApiRepository } from '@infrastructure/restApi/pokemonApiRepository'
import { GetPokemonUseCase } from '@business/useCases/getPokemonUseCase'
import { PokemonApiPresenter } from '@adapter/presenters/pokemonApiPresenter'
const POKE_API_URL = 'https://pokeapi.co'


const init = async (name: string) => {
    const pokeRepository = new PokemonApiRepository(POKE_API_URL)
    const getPokemonUseCase = new GetPokemonUseCase(pokeRepository)
    const pokePresenter = new PokemonApiPresenter(getPokemonUseCase)

    const result = await pokePresenter.showPokemonData(name)
    console.info(result)
}

(async() => {
    await init('Charizard')
})()