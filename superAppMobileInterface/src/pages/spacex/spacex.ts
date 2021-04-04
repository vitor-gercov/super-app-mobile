import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { SpaceXService } from "../../services/spacex.service";

@IonicPage()
@Component({
  selector: "page-spacex",
  templateUrl: "spacex.html",
})
export class SpacexPage {
  constructor(private spaceXService: SpaceXService) {}

  images: string[]

  async ionViewDidLoad() {

    console.log('dale')
    await this.getData()
  }

  getData = async () => {

    let response = await this.spaceXService.getData()

    this.images = response.links.flickr.original
    console.log(this.images)
  }
}
