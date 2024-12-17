import {OptionalId} from "mongodb";

export type Pokemon = {
    id: string,
    name: string,
    abilities: Ability[],
    moves: Move[],
}

export type Ability = {
    id: string,
    name: string,
    effect: string,
}

export type Move = {
    id: string,
    name: string,
    power: number,
}

export type PokemonModel = OptionalId<{
    name: string,
}>

export type AbilityModel = OptionalId<{
    name: string,
    effect: string,
}>

export type MoveModel = OptionalId<{
    name: string,
    power: number, 
}>