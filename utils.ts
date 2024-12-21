import mongoose from "mongoose";

const schema = mongoose.Schema;


export const fetchPokemon = async (id: string | number): Promise<string> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if(!response.ok){
        return "No Pokemon available at the moment.";
    }
    const data  = await response.json();
    return data.setup + " - " + data.punchline; 
};
