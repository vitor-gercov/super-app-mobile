import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IonicPage, NavController } from "ionic-angular";
import { BehaviorSubject } from "rxjs";
import { AnimeService } from "../../services/anime.service";

@IonicPage()
@Component({
  selector: "page-animes",
  templateUrl: "animes.html",
})
export class AnimesPage implements OnInit {
  animeList = new BehaviorSubject<any>({});
  pageNumber = 0;
  constructor(private animeService: AnimeService, private router: Router) {}
  async ngOnInit() {
    this.animeList.next(await this.animeService.getAllAnimes(this.pageNumber));
  }

  async ionViewDidLoad() {}

  async nextPage() {
    this.pageNumber += 10;
    this.animeList.next(await this.animeService.getAllAnimes(this.pageNumber));
  }

  async previousPage() {
    this.pageNumber -= 10;
    this.animeList.next(await this.animeService.getAllAnimes(this.pageNumber));
  }

  openAnimePage(anime) {
    this.router.navigate(["animes", anime.id]);
  }
}
