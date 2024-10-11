import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: HomeComponent },
  { path: 'nosotros', component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent }
];