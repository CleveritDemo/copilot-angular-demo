import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: HomeComponent },
  { path: 'sobre-nosotros', component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
