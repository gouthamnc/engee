import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MoviesListService {
  type: string;
  url = 'http://www.omdbapi.com/';
  moviesList: any = [];
  searchText = '';

  constructor(private http: HttpClient) {
  }

  getList() {
    this.moviesList = [];
    if (!this.searchText) {
      return;
    }
    this.http.get(this.url, {params: {apikey: 'bf879632', s: this.searchText}}).subscribe((response: any) => {
      this.moviesList = response.Search;
    });
  }
}
