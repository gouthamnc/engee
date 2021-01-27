import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsRoutingModule} from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import {NewsListService} from './news-list/news-list.service';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [NewsListComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule
  ],
  providers: [
    NewsListService
  ]
})
export class NewsModule { }
