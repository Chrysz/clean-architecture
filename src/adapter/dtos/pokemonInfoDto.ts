import { PokemonSpriteInfoDto } from '@adapter/dtos/pokemonSpriteInfgoDto'

export interface PokemonInfoDto {
    name: string
    id: number
    height: number
    weight: number
    order: number
    sprites: {
        other: {
            'official-artwork': PokemonSpriteInfoDto
        }
    }
}