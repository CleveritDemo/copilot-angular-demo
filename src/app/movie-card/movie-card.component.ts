import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { Movie } from '../interfaces/movie';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoriteButtonComponent } from '../favorite-button/favorite-button.component';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    CommonModule,
    RouterModule,
    FavoriteButtonComponent,
  ],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  constructor(private router: Router) {}

  get genreList(): string[] {
    return this.movie.generes.split(',').map((genre) => genre.trim());
  }

  goToDetails() {
    this.router.navigate(['/movie', this.movie.id]);
  }
}
