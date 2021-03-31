import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AnimeService{
    constructor(private http:HttpClient){

    }

    getAllAnimes = (): Promise<any> => {
        return this.http.get<any>('https://kitsu.io/api/edge/anime?page[limit]=20').toPromise()
    }
}