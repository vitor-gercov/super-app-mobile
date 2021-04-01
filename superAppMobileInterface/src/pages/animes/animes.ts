import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'page-animes',
  templateUrl: 'animes.html',
})
export class AnimesPage {

  animeList:any = {};
  constructor(public navCtrl: NavController, private animeService:AnimeService) {
  
  }

  async ionViewDidLoad() {
    this.animeList = await this.animeService.getAllAnimes();
    console.log(this.animeList);
  }

}
