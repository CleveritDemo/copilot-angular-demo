import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';
import { MatButtonModule } from '@angular/material/button';
import { RelatedMoviesComponent } from '../related-movies/related-movies.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RelatedMoviesComponent],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: Movie | undefined;
  genres: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movie = await this.movieService.getMovie(id);
      if (this.movie) {
        this.genres = this.movie.generes.split(',').map((g) => g.trim());
      }
    }
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
