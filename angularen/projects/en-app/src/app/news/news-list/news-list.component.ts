import {Component, OnInit} from '@angular/core';
import {NewsListService} from './news-list.service';

@Component({
  selector: 'na-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  searchText = '';

  constructor(public service: NewsListService) {
  }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.service.getNews({q: this.searchText});
  }

}
