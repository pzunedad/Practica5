export const schema = `#graphql
type Pokemon {
    id: ID!
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
    power: String!
  }

type Query {
  pokemonByID(id: ID!): Pokemon!
  pokemonByName(name: String!): Pokemon!
  abilitiesByPokemon(id: ID!, name: String!): [Ability!]!
  movesByPokemon(id: ID!, name: String!): [Moves!]!
}

`;