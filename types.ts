export type Pokemon = {
    id: number,
    name: string,
    abilities: Ability[],
    moves: Move[],
}
/*
es del ditto el ejemplo que sale nada mas abrir el link
"abilities": [
    {
      "ability": {
        "name": "limber",
        "url": "https://pokeapi.co/api/v2/ability/7/"
      },
      "is_hidden": false,
      "slot": 1
    },
    {
      "ability": {
        "name": "imposter",
        "url": "https://pokeapi.co/api/v2/ability/150/"
      },
      "is_hidden": true,
      "slot": 3
    }
  ],
*/
export type Ability = {
    slot: string,
    name: string,
    effect: string,
}

/*   "moves": [
    {
        "move": {
          "name": "transform",
          "url": "https://pokeapi.co/api/v2/move/144/"
        }
*/
export type APIMove = {
    name: string,
}

export type Move = {
    name: string,
    power: number,
}