import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../interfaces/movie';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-related-movies',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './related-movies.component.html',
  styleUrls: ['./related-movies.component.css'],
})
export class RelatedMoviesComponent implements OnInit {
  @Input() genres: string[] = [];
  @Input() currentMovieId: string = '';
  relatedMovies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  async ngOnInit() {
    try {
      const movies = await this.movieService.getMovies();
      if (movies) {
        this.relatedMovies = movies.filter(
          (movie) =>
            movie.id !== this.currentMovieId &&
            movie.generes
              .split(',')
              .some((genre) => this.genres.includes(genre.trim()))
        );
      }
    } catch (error) {
      console.error('Error fetching related movies:', error);
    }
  }
}
