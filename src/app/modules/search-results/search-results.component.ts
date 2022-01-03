import { Component, OnInit } from '@angular/core';
import {ItunesService} from '../../shared-modules/itunes.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  showList = false;
  titleTrack: string = "";
  limit: number = 10;
  toggle = true;
  trackTimeMillis : string = "";
  artistName: string = "";

  collectionName: string = "";
  criteria:any;
  songs:any;
  
  constructor( private service: ItunesService ) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.showList = true;
    this.criteria = {
      titleTrack: this.titleTrack,
      limit: this.limit,
      trackTimeMillis : this.trackTimeMillis,
      artistName: this.artistName,
      collectionName : this.collectionName
    }


    this.service.search(this.criteria)
      .subscribe((res) => {
        this.songs = res.json().results;
      });
  }

  onSort() {
    this.toggle = !this.toggle;
    this.songs.sort((song1:any, song2:any) => this.toggle? song1.trackPrice - song2.trackPrice : song2.trackPrice - song1.trackPrice)  ; 
  } 

}
