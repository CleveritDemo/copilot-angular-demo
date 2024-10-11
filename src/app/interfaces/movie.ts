import { MovieDetail } from './movie-detail';

export interface Movie {
  id: string;
  thumbnail: string;
  name: string;
  year: number;
  score: number;
  generes: string;
  studio: string;
  details: MovieDetail;
}
