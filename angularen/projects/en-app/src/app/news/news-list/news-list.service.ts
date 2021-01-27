import {HttpClient} from '@angular/common/http';
import {NEWS_API_ALL, TOP_HEADLINES} from '../news.api';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class NewsListService {
  news: any = [];
  private url = TOP_HEADLINES;
  private defaultQuery: any = {};

  constructor(private http: HttpClient) {
  }

  getNews(query: any = {}) {
    this.http.get(this.url, {params: {apiKey: environment.NEWS_API_KEY, language: 'en', ...query}}).subscribe((response: any) => {
      this.news = response.articles;
    });
  }

  setType(type: string) {
    if (type === 'headlines') {
      this.url = TOP_HEADLINES;
      this.defaultQuery = {language: 'en', country: 'in'};
    } else {
      this.url = NEWS_API_ALL;
      this.defaultQuery = {language: 'en'};
    }
    this.news = [];
    this.getNews();
  }
}
