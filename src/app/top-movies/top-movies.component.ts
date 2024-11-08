import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../interfaces/movie';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-top-movies',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css'],
})
export class TopMoviesComponent implements OnInit {
  topMovies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  async ngOnInit() {
    try {
      const movies = await this.movieService.getMovies();
      if (movies) {
        this.topMovies = movies.sort((a, b) => b.score - a.score).slice(0, 3);
      }
    } catch (error) {
      console.error('Error fetching top movies:', error);
    }
  }
}
