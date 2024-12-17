import {Pokemon, Ability, Move} from "./types.ts";
import mongoose from "mongoose";

const schema = mongoose.Schema;


export const fetchPokemon = async (
    _: unknown,
    args: (name : String)
) => {
    const response = await fetch("https://pokeapi.co/" + args.name );
    if(!response.ok){
        return "No Pokemon available at the moment.";
    }
    const data  = await response.json();
    console.log(data);
    //return data.setup + " - " + data.punchline; 
};
