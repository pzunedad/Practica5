// Tipo general de Pokémon
export type Pokemon = {
    id: string;
    name: string;
    abilities: Ability[];
    moves: Move[];
  };
  
  // Tipo para habilidades de un Pokémon
  export type Ability = {
    name: string;
    effect: string;
  };
  
  // Tipo para movimientos de un Pokémon
  export type Move = {
    name: string;
    power: number | null; // Algunos movimientos no tienen poder asignado
  };
  
  // Tipos auxiliares para la respuesta de la API
  export type FetchPokemonAbilityResponse = {
    name: string;
    effect_entries: {
      language: { name: string };
      effect: string;
    }[];
  };
  
  export type FetchPokemonMoveResponse = {
    name: string;
    power: number | null;
  };
  