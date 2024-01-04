import { PokemonHTML } from './selectInfo.js';

const arrayAbilities = [PokemonHTML.abilityOne, PokemonHTML.abilityTwo, PokemonHTML.abilityThree, PokemonHTML.abilityFour];
let message = document.querySelector("#message");
export default function PokemonError() {
  PokemonHTML.name.innerText = "";
  PokemonHTML.id.innerText = "";
  PokemonHTML.img.src = "../img/pokeball.png ";
  PokemonHTML.weight.innerText = "";
  PokemonHTML.height.innerText = "";
  PokemonHTML.specie.innerText = "";
  PokemonHTML.firstType.style.background = "#ffff";
  PokemonHTML.secondType.style.background = "#ffff";
  arrayAbilities.forEach((ability) => {
    ability.innerText = "";
  });
  message.innerText = "Pokemon Não Encontrado";
  setInterval(() => {
    message.innerText = "";
  }, 2000);
}