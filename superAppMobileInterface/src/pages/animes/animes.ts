import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'page-animes',
  templateUrl: 'animes.html',
})
export class AnimesPage {

  animeList:any = {};
  pageNumber = 0;
  constructor(public navCtrl: NavController, private animeService:AnimeService) {
  
  }

  async ionViewDidLoad() {
    this.animeList = await this.animeService.getAllAnimes(this.pageNumber);
    console.log(this.animeList);
  }

  async nextPage(){
    this.pageNumber += 10;
    this.animeList = await this.animeService.getAllAnimes(this.pageNumber);
    console.log(this.animeList);
  }

  async previousPage(){
    this.pageNumber -= 10;
    this.animeList = await this.animeService.getAllAnimes(this.pageNumber);
    console.log(this.animeList);
  }
}
