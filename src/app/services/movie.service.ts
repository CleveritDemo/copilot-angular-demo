import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:3000/movies'; // URL de la API

  constructor(private http: HttpClient) {}

  // Obtener todas las películas
  async getMovies(): Promise<Movie[] | undefined> {
    return await this.http.get<Movie[]>(this.apiUrl).toPromise();
  }

  // Obtener una película por ID
  async getMovie(id: string): Promise<Movie | undefined> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Movie>(url).toPromise();
  }

  // Crear una nueva película
  async createMovie(movie: Movie): Promise<Movie | undefined> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Movie>(this.apiUrl, movie, { headers }).toPromise();
  }

  // Actualizar una película existente
  async updateMovie(movie: Movie): Promise<Movie | undefined> {
    const url = `${this.apiUrl}/${movie.id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Movie>(url, movie, { headers }).toPromise();
  }

  // Eliminar una película
  async deleteMovie(id: string): Promise<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).toPromise();
  }
}