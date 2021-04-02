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

  gamesList: any[] = []
  storesList: any[] = []

  storesLinks: string[] = [

    "https://store.steampowered.com",
    "https://www.amazon.com.br",
    "https://www.gamestop.com",
    "https://www.gog.com",
    "https://www.origin.com",
    "https://www.humblebundle.com",
    "https://store.ubi.com",
    "https://www.epicgames.com",
    "https://us.shop.battle.net/en-us"
  ]

  async ionViewDidLoad() {  

    await this.getGames()
    await this.getStores()
  }

  getGames = async () => {

    let resultList = await this.gameService.getAllGames()

    let gameObj = {}

    resultList.forEach(resultItem => {
      
      gameObj = {

        name: resultItem.title,
        storeId: resultItem.storeID,
        salePrice: resultItem.salePrice,
        normalPrice: resultItem.normalPrice,
        storeName: '',
        storeLink: '#'
      }

      this.gamesList.push(gameObj)

      gameObj = {}
    });
  }

  getStores = async () => {

    let resultList = await this.gameService.getAllStores()

    let storeObj = {}

    resultList.forEach(resultItem => {
      
      storeObj = {

        id: resultItem.storeID,
        name: resultItem.storeName,
        active: resultItem.isActive
      }

      if (storeObj.active) this.storesList.push(storeObj)

      storeObj = {}
    });

    this.gamesList.forEach(game => {

      this.storesList.forEach(store => {
        
        if (game.storeId === store.id) {
          
          game.storeName = store.name
          return
        } 
      })
    })

    this.gamesList = this.setStoreLinks(this.gamesList)
    console.log(this.gamesList)
  }

  setStoreLinks = (games: any[]) => {

    games.forEach(game => {

      switch (game.storeName) {

        case 'Steam':

          game.storeLink = this.storesLinks[0]
          break;

        case 'Amazon':
          
          game.storeLink = this.storesLinks[1]
          break;
        
        case 'GameStop':
          
          game.storeLink = this.storesLinks[2]
          break;
    
        case 'GOG':
          
          game.storeLink = this.storesLinks[3]
          break;
      
        case 'Origin':
          
          game.storeLink = this.storesLinks[4]
          break;
    
        case 'Humble Store':
          
          game.storeLink = this.storesLinks[5]
          break;
        
        case 'Uplay':
          
          game.storeLink = this.storesLinks[6]
          break;
      
        case 'Epic Games Store':
          
          game.storeLink = this.storesLinks[7]
          break;
    
        case 'Blizzard Shop':
          
          game.storeLink = this.storesLinks[8]
          break;
      
        default:
          break;
      }
    })

    return games
  }
}
