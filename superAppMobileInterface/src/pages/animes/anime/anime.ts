import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IonicPage, NavController } from "ionic-angular";
import { BehaviorSubject } from "rxjs";
import { AnimeService } from "../../../services/anime.service";

@IonicPage()
@Component({
  selector: "page-anime",
  templateUrl: "anime.html",
})
export class AnimePage implements OnInit {
  anime;
  constructor(
    private animeService: AnimeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("animeId");
    this.anime = await this.animeService.getAnimeById(+id);
    console.log(this.anime);
  }

  backToList() {
    this.router.navigate(["animes"]);
  }
}
