import {Pokemon, Ability, Move, PokemonModel, AbilityModel, MoveModel} from "./types.ts";

export const fromModelToPokemon = (pokemonModel: PokemonModel, abilities: Ability[], moves: Move[]): Pokemon => {
    return {
        id: pokemonModel._id!.toString(),
        name: pokemonModel.name,
        abilities,
        moves,
    };
};

export const fromModelToAbility = (abilityModel: AbilityModel): Ability => {
    return{
        id: abilityModel._id!.toString(),
        name: abilityModel.name,
        effect: abilityModel.effect,
    }
}

export const fromModelToMove = (moveModel: MoveModel): Move => {
    return{
        id: moveModel._id!.toString(),
        name: moveModel.name,
        power: moveModel.power,
    }
}

export const fetchPokemon = async (): Promise<string> => {
    const response = await fetch("https://pokeapi.co/");
    if(!response.ok){
        return "No Pokemon available at the moment.";
    }
    const data  = await response.json();
    return data.setup + " - " + data.punchline; 
};
