import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Brewery } from "../models/brewery-model";
import { Observable } from "rxjs";

@Injectable()
export class DataService {
    private readonly apiUrl = 'https://api.openbrewerydb.org/breweries';

    constructor(private http: HttpClient) { }

    public Get(): Observable<Brewery[]> {
        return this.http
            .get<Brewery[]>(this.apiUrl);
    }

    public GetWithParams(
        state: string,
        name: string,
        limit: string
    ): Observable<Brewery[]> {
        let params = new HttpParams()
            .set('by_state', state)
            .set('by_name', name)
            .set('per_page', limit);

        return this.http
            .get<Brewery[]>(this.apiUrl, { params: params });
    }
}