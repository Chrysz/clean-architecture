import { Sprites } from '@domain/entities'

export interface Pokemon {
    id: number
    order: number
    name: string
    sprites: {
        other: Sprites
    }
}