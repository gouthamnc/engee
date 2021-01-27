import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesListComponent} from './movies-list/movies-list.component';
import {MoviesListService} from './movies-list/movies-list.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [MoviesListComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule
  ],
  providers: [
    MoviesListService
  ]
})
export class MoviesModule {
}
