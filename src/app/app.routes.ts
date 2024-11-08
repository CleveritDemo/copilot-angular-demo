import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: HomeComponent },
  { path: 'sobre-nosotros', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
