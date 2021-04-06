import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
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

  constructor(public animeService: AnimeService, private router: Router) {}

  async ngOnInit() {
    this.animeList.next(await this.animeService.getAllAnimes());
  }

  async ionViewDidLoad() {}

  async nextPage() {
    this.animeService.pageNumber += 10;
    this.animeList.next(await this.animeService.getAllAnimes());
  }

  async previousPage() {
    this.animeService.pageNumber -= 10;
    this.animeList.next(await this.animeService.getAllAnimes());
  }

  openAnimePage(anime) {
    this.router.navigate(["animes", anime.id]);
  }
}
