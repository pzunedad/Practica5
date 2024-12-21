import mongoose from "mongoose";
import { Ability, Move } from "./types.ts";

const schema = mongoose.Schema;


export const fetchPokemon = async (id: string | number): Promise<string> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if(!response.ok){
        return "No Pokemon available at the moment.";
    }
    const data  = await response.json();
    return data.setup + " - " + data.punchline; 
};

export const fetchPokemonAbility = async (url: string): Promise<Ability> =>{
    const response = await fetch(url);
    if(!response.ok) throw new Error("Ability not found");
    
    const data= await response.json();
  
    const spanishInfo = data.effect_entries.find((e:any) => e.language.name === "es");
    const effect = spanishInfo ? spanishInfo.effect : "No hay descripcion";

      return {
        name: data.name,
        effect,
      };
}

export const fetchPokemonMoves = async (url: string): Promise<Move> =>{
    const response = await fetch(url);
    if(!response.ok) throw new Error("Move not found");
    
    const data= await response.json();
  
      return {
        name: data.name,
        power: data.power,
      };
}
