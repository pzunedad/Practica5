import mongoose from "mongoose";
import { Ability, Move } from "./types.ts";

const schema = mongoose.Schema;

// Función genérica para peticiones a la PokéAPI
const fetchFromApi = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch from: ${url}`);
  return response.json();
};

// Obtener información de un Pokémon
export const fetchPokemon = async (id: string | number): Promise<string> => {
  const data = await fetchFromApi<any>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return `${data.name} (${data.id})`;
};

// Obtener información de una habilidad
export const fetchPokemonAbility = async (url: string): Promise<Ability> => {
  const data = await fetchFromApi<any>(url);

  const spanishInfo = data.effect_entries.find((entry: any) => entry.language.name === "es");
  const effect = spanishInfo ? spanishInfo.effect : "No hay descripción disponible";

  return {
    name: data.name,
    effect,
  };
};

// Obtener información de un movimiento
export const fetchPokemonMoves = async (url: string): Promise<Move> => {
  const data = await fetchFromApi<any>(url);
  return {
    name: data.name,
    power: data.power || 0, // Algunos movimientos pueden no tener valor de poder
  };
};
