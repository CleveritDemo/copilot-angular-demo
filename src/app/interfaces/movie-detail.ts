import { Actor } from './actor';

export interface MovieDetail {
  synopsis: string;
  producer: string;
  director: string;
  actors: Actor[];
}