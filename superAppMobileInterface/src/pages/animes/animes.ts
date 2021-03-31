import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'page-animes',
  templateUrl: 'animes.html',
})
export class AnimesPage {

  constructor(public navCtrl: NavController, private animeService:AnimeService) {
  
  }

  async ionViewDidLoad() {
    console.log(await this.animeService.getAllAnimes());
  }

}
