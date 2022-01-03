import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  constructor(private http: Http) { }

  search(critiria:any) {

    return this.http.get(`https://itunes.apple.com/search?term=${critiria.titleTrack}&limit=${critiria.limit}`);

  }
}
