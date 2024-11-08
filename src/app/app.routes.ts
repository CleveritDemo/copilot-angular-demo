import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'contacto', component: AppComponent },
  { path: 'sobre-nosotros', component: AppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
