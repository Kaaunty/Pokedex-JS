import { PokemonHTML } from './selectInfo.js';
import GetPokemon from './GetPokemon.js';


const arrayAbilities = [PokemonHTML.abilityOne, PokemonHTML.abilityTwo, PokemonHTML.abilityThree, PokemonHTML.abilityFour];
export default function ChangePokemonInfo(name) {
  GetPokemon(name).then((pokemon) => {
    PokemonHTML.name.innerText = pokemon.name;
    PokemonHTML.firstType.innerText = pokemon.types[0].type.name;
    PokemonHTML.img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`;
    PokemonHTML.height.innerText = pokemon.height / 10 + "M";
    PokemonHTML.weight.innerText = pokemon.weight / 10 + " kg";
    PokemonHTML.specie.innerText = pokemon.species.name;

    PokemonHTML.firstType.style.background = "#ffff";
    if (pokemon.types > 1) {
      PokemonHTML.secondType.innerText = pokemon.types[1].type.name;
      PokemonHTML.secondType.style.background = "#ffff";

    } else {
      PokemonHTML.secondType.innerText = "";
      PokemonHTML.secondType.style.background = "#ffff";
    }
    arrayAbilities.forEach((element) => {
      element.innerText = "";
    });

    pokemon.abilities.forEach(item => {
      let spanAbility = arrayAbilities[pokemon.abilities.indexOf(item)];
      spanAbility.innerText = item.is_hidden ? `${item.ability.name} *Oculta*` : item.ability.name;
    });

  });

}
