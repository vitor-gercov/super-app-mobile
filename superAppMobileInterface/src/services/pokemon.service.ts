import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PokemonService {
  pageNumber = 0;

  constructor(private http: HttpClient) {}

  getAllPokemons = (): Promise<any> => {
    return this.http
      .get<any>(
        `https://pokeapi.co/api/v2/pokemon?offset=${this.pageNumber}&limit=20`
      )
      .toPromise();
  };

  getPokemonByUrl = (url: string): Promise<any> => {
    return this.http.get<any>(url).toPromise();
  };

  getPokemonById = (id): Promise<any> => {
    return this.http
      .get<any>(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .toPromise();
  };

  getPokemonAbilites = (url): Promise<any> => {
    return this.http.get<any>(url).toPromise();
  };
}
