import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AnimeService{
    constructor(private http:HttpClient){

    }

    getAllAnimes = (pageId:number): Promise<any> => {
        return this.http.get<any>(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${pageId}`).toPromise()
    }
}