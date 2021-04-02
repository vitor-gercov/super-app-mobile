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
  constructor(
    private animeService: AnimeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("animeId");
    console.log(id);
  }

  backToList() {
    this.router.navigate(["animes"]);
  }
}
