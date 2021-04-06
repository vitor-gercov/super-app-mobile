import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IonicPage } from "ionic-angular";
import { PokemonService } from "../../services/pokemon.service";

/**
 * Generated class for the SpacexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-pokemon",
  templateUrl: "pokemon.html",
})
export class PokemonPage implements OnInit {
  pokemonList: any = {};

  constructor(public pokemonService: PokemonService, private router: Router) {}

  async ngOnInit() {
    this.pokemonList = await this.pokemonService.getAllPokemons();
  }

  openPokemonPage(pokemon) {
    this.router.navigate(["pokemon", pokemon.url.split("/")[6]]);
  }

  async previousPage() {
    this.pokemonService.pageNumber -= 20;
    this.pokemonList = await this.pokemonService.getAllPokemons();
  }
  async nextPage() {
    this.pokemonService.pageNumber += 20;
    this.pokemonList = await this.pokemonService.getAllPokemons();
  }

  getPokemon = async (pokemon) => {
    try {
      return this.pokemonService.getPokemonByUrl(pokemon.url).catch(() => {});
    } catch {}
  };
}
