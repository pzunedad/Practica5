export const schema = `#graphql
type Pokemon {
    id: Int
    name: String
    abilities: [Ability]
    moves: [Move]
  }

  type Ability {
    name: String
    effect: String
  }

  type Move {
    name: String
    power: Int
  }

type Query {
  pokemon(id: Int, name: String): Pokemon
}
`;