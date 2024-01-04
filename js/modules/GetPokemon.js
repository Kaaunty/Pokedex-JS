
import PokemonError from './ErrorTreatment.js';
export default async function GetPokemon(name) {
  try {
    const pokemonResponse = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)).json();
    return pokemonResponse;
  } catch {
    PokemonError();
  }


}