import { MovieDetails } from './movie-details';

export interface Movie {
  id: string;
  thumbnail: string;
  name: string;
  year: number;
  score: number;
  generes: string;
  studio: string;
  details: MovieDetails;
}
