import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { IonicPage } from "ionic-angular";
import { PokemonService } from "../../../services/pokemon.service";
import ColorThief from "colorthief";

/**
 * Generated class for the SpacexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-pokemon-data",
  templateUrl: "pokemon-data.html",
})
export class PokemonDataPage implements OnInit {
  pokemonData: any = {};
  backgroundColor = "#fff";
  initialized = false;

  constructor(
    public pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("pokemonId");
    this.pokemonData = await this.pokemonService.getPokemonById(+id);

    const colorThief = new ColorThief();

    const img = new Image();

    img.addEventListener("load", async () => {
      const hex = await colorThief.getColor(img);
      this.backgroundColor = this.rgbToHex(hex[0], hex[1], hex[2]);
      this.initialized = true;
    });

    let imageURL = this.pokemonData.sprites.other.dream_world.front_default;
    let googleProxyURL =
      "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=";

    img.crossOrigin = "Anonymous";
    img.src = googleProxyURL + encodeURIComponent(imageURL);
  }

  getPokemonAbility = async (ability) => {
    const habilidade = await this.pokemonService.getPokemonAbilites(
      ability.ability.url
    );

    return habilidade.effect_entries.find(
      (effect) => effect.language.name === "en"
    ).effect;
  };
  rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  backToList() {
    this.router.navigate(["pokemon"]);
  }
}
