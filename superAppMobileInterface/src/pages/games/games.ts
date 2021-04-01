import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameService } from '../../services/game.service';

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {

  constructor(
    
    public navCtrl: NavController, 
    public navParams: NavParams,
    private gameService: GameService
  ) {}

  gamesList:any[] = []

  async ionViewDidLoad() {  

    this.getGames()
  }

  getGames = async () => {

    let resultList = await this.gameService.getAllGames()

    let gameObj = {}

    resultList.forEach(resultItem => {
      
      gameObj = {

        name: resultItem.title,
        salePrice: resultItem.salePrice,
        normalPrice: resultItem.normalPrice
      }

      this.gamesList.push(gameObj)

      gameObj = {}
    });
  }
}
