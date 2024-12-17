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