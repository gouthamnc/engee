import { Component, OnInit } from '@angular/core';
import {MoviesListService} from './movies-list.service';

@Component({
  selector: 'na-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  constructor(public service: MoviesListService) { }

  ngOnInit(): void {
    this.service.getList();
  }

}
