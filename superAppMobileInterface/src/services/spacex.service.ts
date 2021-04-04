import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SpaceXService {

    constructor (private http: HttpClient) {}

    getData = (): Promise<any> => {

        return this.http.get<any>('https://api.spacexdata.com/v4/launches/latest').toPromise()
    }
}