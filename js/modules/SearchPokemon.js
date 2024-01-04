import ChangePokemonInfo from "./ChangePokemon.js";

const pokemonSearch = document.querySelector("#pokemonSearch");

export default function PokemonSearch() {
  pokemonSearch.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      ChangePokemonInfo(pokemonSearch.value.toLowerCase());
    }
  });
}







