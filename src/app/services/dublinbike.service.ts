import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dublinbike } from '../models/dublinbike';

@Injectable({
  providedIn: 'root'
})
export class DublinbikeService {

  CONTRACT_NAME = 'dublin'
  API_KEY = environment.api_key;
  ENDPOINT_URL = `https://api.jcdecaux.com/vls/v1/stations`
  

  constructor(private http:HttpClient) { }

  getStations() : Observable<Dublinbike[]> {
  
    const endpoint = `${this.ENDPOINT_URL}?contract=${this.CONTRACT_NAME}&apiKey=${this.API_KEY}`;

    return this.http.get<Dublinbike[]>(endpoint)

  }

  getStation(stationId: number) : Observable<Dublinbike>{
  
    const endpoint = `${this.ENDPOINT_URL}/${stationId}/?contract=${this.CONTRACT_NAME}&apiKey=${this.API_KEY}`;

    return this.http.get<Dublinbike>(endpoint);

  }
}
