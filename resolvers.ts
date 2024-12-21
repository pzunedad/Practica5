import { Pokemon, Ability, Move} from "./types.ts";
import { fetchPokemon, fetchPokemonAbility, fetchPokemonMoves } from "./utils.ts";

export const resolvers = {
    /*
    Query: {
        pokemon: async (
          _: unknown,
          args: { id?: number; name?: string },
          __: unknown,
        ): Promise<Pokemon | null> => {

      },
      */
    Pokemon: {
        abilities:(
            parent: Pokemon,
            _: unknown,
            __: unknown,
        ): Promise<Ability[]> => {
            const abilities = parent.abilities;
            return Promise.all(abilities.map(a => fetchPokemonAbility(a.name)));
        },

        moves:(
            parent: Pokemon,
            _: unknown,
            __:unknown,
        ): Promise<Move[]> => {
            const moves = parent.moves;
            return Promise.all(moves.map(m => fetchPokemonMoves(m.name)));
        }
    }
};