import { Pokemon } from '@domain/entities/pokemon'
import { PokemonInfoDto } from '@adapter/dtos/pokemonInfoDto'
import { PokemonInfoShowDto } from '@adapter/dtos/pokemonInfoShowDto'

export class PokemonInfoMapper {
    static ToInfoShowDto(entity: Pokemon): PokemonInfoShowDto {
        return {
            name: entity.name,
            height: entity.height,
            weight: entity.weight,
            sprite_default: entity.spriteDefault,
            sprite_shiny: entity.spriteShiny
        }
    }
}