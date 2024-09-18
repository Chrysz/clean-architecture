import { Pokemon } from '@domain/entities/pokemon'
import { PokemonRepository } from '@domain/repositories/pokemonRepository'
import { GetPokemonUseCase } from '../src/business/useCases/getPokemonUseCase'

describe('Get Pokemon From Rest Api', () => {
    it('Should return a pokemon', async () => {
        // Arrange
        const returnedPokemon: Pokemon = {
            id: 6,
            name: 'charizard',
            height: 17,
            weight: 905,
            spriteDefault: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
            spriteShiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png',
        }

        const pokemonRepository: PokemonRepository = {
            getPokemonByName: jest.fn().mockResolvedValue(returnedPokemon)
        }
        const getPokemonUseCase = new GetPokemonUseCase(pokemonRepository) 

        // Act
        const pokemon = await getPokemonUseCase.execute('charizard')

        // Assert
        expect(pokemon).toEqual(returnedPokemon)
        expect(pokemonRepository.getPokemonByName).toHaveBeenCalledTimes(1)
    })
    it('Should return an error when the pokemon is not found', async () => {
        // Arrange
        const pokemonRepository: PokemonRepository = {
            getPokemonByName: jest.fn().mockResolvedValue(null)
        }
        const getPokemonUseCase = new GetPokemonUseCase(pokemonRepository) 

        // Act
        const act = getPokemonUseCase.execute('charizard123')

        // Assert
        expect(act).rejects.toThrowError('Pokemon not found')
        expect(pokemonRepository.getPokemonByName).toHaveBeenCalledTimes(1)
    })
})