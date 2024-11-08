import { Actor } from './actor';

export interface MovieDetails {
  synopsis: string;
  producer: string;
  director: string;
  actors: Actor[];
}
