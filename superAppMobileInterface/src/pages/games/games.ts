import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { GameService } from "../../services/game.service";

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-games",
  templateUrl: "games.html",
})
export class GamesPage implements OnInit {
  constructor(private gameService: GameService) {}

  gamesList: any[] = [];

  async ngOnInit() {
    this.getGames();
  }

  getGames = async () => {
    let resultList = await this.gameService.getAllGames();

    let gameObj = {};

    resultList.forEach((resultItem) => {
      gameObj = {
        name: resultItem.title,
        salePrice: resultItem.salePrice,
        normalPrice: resultItem.normalPrice,
      };

      this.gamesList.push(gameObj);

      gameObj = {};
    });
  };
}
