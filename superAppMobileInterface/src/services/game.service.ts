import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GameService {

    constructor(private http: HttpClient) {}

    getAllGames = (): Promise<any> => {

        return this.http.get<any>('https://www.cheapshark.com/api/1.0/deals').toPromise()
    }

    getAllStores = (): Promise<any> => {

        return this.http.get<any>('https://www.cheapshark.com/api/1.0/stores?isActive=1').toPromise()
    }
}