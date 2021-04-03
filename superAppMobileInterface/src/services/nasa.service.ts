import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class NasaService {
  constructor(private http: HttpClient) {}

  getAstronomyPictureOfTheDay = (date: string): Promise<any> => {
    return this.http
      .get<any>(
        `https://api.nasa.gov/planetary/apod?api_key=kRhdaMTvr191IuQn5SSbMo0UHvmoRUIKy33mRtpj&date=${date}`
      )
      .toPromise();
  };
}
