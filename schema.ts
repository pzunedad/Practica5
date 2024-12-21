export const schema = `#graphql
type Pokemon {
    id: Int!
    name: String!
    abilities: [Ability!]!
    moves: [Moves!]!
  }

  type Ability {
    name: String!
    effect: String!
  }

  type Moves {
    name: String!
    power: Int!
  }

type Query {
  pokemon(id: Int!, name: String!): Pokemon!
}
`;