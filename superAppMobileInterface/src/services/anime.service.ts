import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AnimeService {
  pageNumber = 0;

  constructor(private http: HttpClient) {}

  getAllAnimes = (): Promise<any> => {
    console.log(this.pageNumber);
    return this.http
      .get<any>(
        `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${this.pageNumber}`
      )
      .toPromise();
  };
  getAnimeById = (animeId: number): Promise<any> => {
    return this.http
      .get<any>(`https://kitsu.io/api/edge/anime/${animeId}`)
      .toPromise();
  };
}
