import {  Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { IonicPage } from "ionic-angular";
import { BehaviorSubject } from "rxjs";
import { NasaService } from '../../services/nasa.service'

@IonicPage()
@Component({
  selector: "page-nasa",
  templateUrl: "nasa.html",
})
export class NasaPage implements OnInit {
  pickedDate: string;
  pictureData = new BehaviorSubject<any>({});
  isImage: boolean;
  safeUrl: SafeResourceUrl;

  constructor(private nasaService: NasaService, private sanitizer: DomSanitizer) {}

  private updateData(apodData: any) {
    this.isImage = apodData.media_type == "image"
    this.pictureData = apodData

    if (!this.isImage) this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(apodData.url)
  }
  async ngOnInit() {
    const apodData = await this.getYesterdayAPOD()
    this.updateData(apodData)
  }

  async ionViewDidLoad() {}

  async getPickedAPOD() {
    const apodData = await this.nasaService.getAstronomyPictureOfTheDay(this.pickedDate)
    this.updateData(apodData)
  }

  async getYesterdayAPOD() {
    const now = new Date()

    const pad = (num:number): string => {
      if(num<9) return `0${num}`
      return num.toString()
    }

    const formattedNowDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate() - 1)}`
    return await this.nasaService.getAstronomyPictureOfTheDay(formattedNowDate)
  }
}
