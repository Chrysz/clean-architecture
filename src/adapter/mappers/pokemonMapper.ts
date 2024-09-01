import { Pokemon } from "@domain/entities"
import { PokemonDto } from "@adapter/dtos/pokemonDto"

export class PokemonMapper {
    static toDto(pokemon: Pokemon): PokemonDto {
        return {
            id: pokemon.id,
            order: pokemon.order,
            name: pokemon.name,
            sprite_main: pokemon.sprites.other["official-artwork"].front_default,
            sprite_main_shiny: pokemon.sprites.other["official-artwork"].front_shiny,
        }
    }
}