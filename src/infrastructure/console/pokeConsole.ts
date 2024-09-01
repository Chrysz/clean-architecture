import { RestApiPokemonRepository } from '../restApi/pokeApi/restApiPokemonRepository'
import { GetPokemon } from '../../business/useCases/getPokemon'
import { PokemonController } from '../../adapter/controller/pokemonController'

const baseUrl = "https://pokeapi.co/api/v2"
const pokemonRepository = new RestApiPokemonRepository(baseUrl)
const getPokemonUseCase = new GetPokemon(pokemonRepository)
const pokemonController = new PokemonController(getPokemonUseCase)

const init =  async (pokeName: string) => {
    const result = await pokemonController.getPokemonHandle(pokeName)
    console.info(result)
}

(async () => {
    await init("charizard")
})()