import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)},
  {path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
