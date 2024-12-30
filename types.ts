export type Pokemon = {
    id: string;
    name: string;
    abilities: Ability[];
    moves: Move[];
  };
  
  export type Ability = {
    name: string;
    effect: string;
  };
  
  export type Move = {
    name: string;
    power: number | null; // Algunos movimientos no tienen poder asignado
  };
  
//----------------------
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
  