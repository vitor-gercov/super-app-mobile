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
  linkTrailer:string;
  constructor(
    private animeService: AnimeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("animeId");
    this.anime = await this.animeService.getAnimeById(+id);
    if (this.anime.data.attributes.youtubeVideoId){
      this.linkTrailer = `https://www.youtube.com/embed/${this.anime.data.attributes.youtubeVideoId}`
    }
    console.log(this.anime);
  }

  backToList() {
    this.router.navigate(["animes"]);
  }
}
