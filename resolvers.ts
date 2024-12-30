// deno-lint-ignore-file
import { Pokemon, Ability, Move, FetchPokemonAbilityResponse, FetchPokemonMoveResponse } from "./types.ts";

export const resolvers = {
  Query: {
    async pokemon(
      _: unknown,
      { id, name }: { id?: number; name?: string },
    ): Promise<Pokemon | null> {
      if (!id && !name) {
        console.error("No ID or name provided for the query.");
        return null;
      }

      const url = id
        ? `https://pokeapi.co/api/v2/pokemon/${id}`
        : `https://pokeapi.co/api/v2/pokemon/${name}`;
      const response = await fetch(url);

      if (!response.ok) {
        console.error(`Failed to fetch Pokémon with id/name: ${id || name}`);
        return null;
      }

      const data = await response.json();
      return {
        id: data.id.toString(),
        name: data.name,
        abilities: data.abilities,
        moves: data.moves,
      };
    },
  },

  Pokemon: {
    abilities: async (parent: Pokemon): Promise<Ability[]> => {
      if (!parent.abilities) return [];
      return fetchAbilities(parent.abilities);
    },

    moves: async (parent: Pokemon): Promise<Move[]> => {
      if (!parent.moves) return [];
      return fetchMoves(parent.moves);
    },
  },
};

// Helper function to fetch abilities
const fetchAbilities = async (abilities: any[]): Promise<Ability[]> => {
  return Promise.all(
    abilities.map(async ({ ability }: any) => {
      try {
        const response = await fetch(ability.url);
        if (!response.ok) {
          console.error(`Failed to fetch ability: ${ability.name}`);
          return { name: ability.name, effect: "No effect found" };
        }

        const data: FetchPokemonAbilityResponse = await response.json();
        const effect =
          data.effect_entries.find((entry) => entry.language.name === "en")
            ?.effect || "No effect found";

        return { name: data.name, effect };
      } catch (error) {
        console.error(`Error fetching ability: ${ability.name}`, error);
        return { name: ability.name, effect: "Error retrieving ability" };
      }
    }),
  );
};

// Helper function to fetch moves
const fetchMoves = async (moves: any[]): Promise<Move[]> => {
  return Promise.all(
    moves.map(async ({ move }: any) => {
      try {
        const response = await fetch(move.url);
        if (!response.ok) {
          console.error(`Failed to fetch move: ${move.name}`);
          return { name: move.name, power: null };
        }

        const data: FetchPokemonMoveResponse = await response.json();
        return {
          name: data.name,
          power: data.power || null,
        };
      } catch (error) {
        console.error(`Error fetching move: ${move.name}`, error);
        return { name: move.name, power: null };
      }
    }),
  );
};
