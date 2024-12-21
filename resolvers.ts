import { Pokemon, Ability } from "./types.ts";
import { fetchPokemon } from "./utils.ts";
import { Move } from "./types.ts";

export const resolvers = {
    Pokemon: {
        abilities: async (
            parent: Pokemon,
            _: unknown,
            __: unknown,
        ): Promise<Ability[]> => {
            return await Promise.all(
                parent.abilities.map(async (abilityInfo: any) => {
                    const effect = await fetchPokemon(abilityInfo.ability.url);
                    return {
                        slot: abilityInfo.slot,
                        name: abilityInfo.ability.name,
                        effect,
                    };
                })
            );
        },

        moves: async (
            parent: Pokemon,
            _: unknown,
        ): Promise<Move[]> => {
            return await Promise.all(
                parent.moves.map(async (moveInfo: any) => {
                    const effect = await fetchPokemon(moveInfo.move.url.split('/').slice(-2, -1)[0]);
                    const power = parseInt(effect, 10) || 0; // Convertir el efecto a número
                    return {
                        name: moveInfo.move.name,
                        power, 
                    };
                })
            );
        }
    }
};