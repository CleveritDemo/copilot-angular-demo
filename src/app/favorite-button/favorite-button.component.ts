import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css'],
})
export class FavoriteButtonComponent implements OnInit {
  @Input() movie!: Movie;
  isFavorite: boolean = false;

  ngOnInit() {
    this.isFavorite = this.checkIfFavorite();
  }

  toggleFavorite() {
    const favorites = this.getFavorites();
    if (this.isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(
        (fav) => fav.id !== this.movie.id
      );
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      favorites.push(this.movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    this.isFavorite = !this.isFavorite;
  }

  checkIfFavorite(): boolean {
    const favorites = this.getFavorites();
    return favorites.some((fav) => fav.id === this.movie.id);
  }

  getFavorites(): Movie[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }
}
