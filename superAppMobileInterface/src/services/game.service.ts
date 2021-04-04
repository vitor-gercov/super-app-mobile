import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GameService {

    constructor(private http: HttpClient) {}

    getAllGames = (): Promise<any> => {

        return this.http.get<any>('https://www.cheapshark.com/api/1.0/deals?storeID=1,4,5,7,8,11,13,25,31').toPromise()
    }

    getAllStores = (): Promise<any> => {

        return this.http.get<any>('https://www.cheapshark.com/api/1.0/stores?isActive=1').toPromise()
    }
}