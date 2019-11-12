import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {People, Planet, Film, Species, Starship, Vehicle} from './model/swapi.models';
import {catchError} from 'rxjs/operators';

const swapiUrl = 'https://swapi.co/api/';

@Injectable()
export class SwapiService {

  constructor(
    private http: HttpClient,
  ) {  }

  /**
   * Add page value url param
   */
  // getByPage(page: number): string;
  /**
   * Return list of people as observable
   */
  getPeoples(page?: number): Observable<People[]> {
    return this.http.get<People[]>(`${swapiUrl}people/${page || ''}`).
      pipe( catchError(this.handleError<People[]>('people')));
  }
  /**
   * Return people by id
   */
  getPeople(id: number): Observable<People> {
    return this.http.get<People>(`${swapiUrl}people/${id}/`).
    pipe( catchError(this.handleError<People>('people')));
  }
  /**
   * Search people by name
   */
  searchPeople(name: string): Observable<People[]> {
    return this.http.get<People[]>(`${swapiUrl}people/`, {
      params: new HttpParams().set('search', name)
    }).pipe( catchError(this.handleError<People[]>('people')));
  }
  /**
   * Return list of films as observable
   */
  getFilms(page?: number): Observable<Film[]> {
    return this.http.get<Film[]>(`${swapiUrl}films/${page || ''}`).
    pipe( catchError(this.handleError<Film[]>('films')));
  }
  /**
   * Return film by id
   */
  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${swapiUrl}films/${id}`).
    pipe( catchError(this.handleError<Film>('films')));
  }
  /**
   * Search films by title
   */
  searchFilms(title: string): Observable<Film[]> {
    return this.http.get<Film[]>(`${swapiUrl}films/`, {
      params: new HttpParams().set('search', title)
    }).pipe( catchError(this.handleError<Film[]>('films')));
  }
  /**
   * Return list of starships
   */
  // getStarships(page?: number): Observable<Starship[]>;
  /**
   * Return starship by id
   */
  // getStarship(id: number): Observable<Starship>;
  /**
   * Search starships by name
   */
  // searchStarships(name: string): Observable<Starship[]>;
  /**
   * Return list of vehicles as observable
   */
  // getVehicles(page?: number): Observable<Vehicle[]>;
  /**
   * Return vehicle by id
   */
  // getVehicle(id: number): Observable<Vehicle>;
  /**
   * Search vehicles by name
   */
  // searchVehicles(name: string): Observable<Vehicle[]>;
  /**
   * Retrun list of species as observable
   */
  // getSpecies(page?: number): Observable<Species[]>;
  /**
   * Return species by id
   */
  // getSpeciesById(id: number): Observable<Species>;
  /**
   * Search species by name
   */
  // searchSpecies(name: string): Observable<Species[]>;
  /**
   *  Return list od planets as observable
   */
  getPlanets(page?: number): Observable<Planet[]> {
    return this.http.get<Planet[]>(`${swapiUrl}planets/${page || ''}`).
    pipe( catchError(this.handleError<Planet[]>('planets')));
  }
  /**
   * Return planet by id
   */
  getPlanet(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${swapiUrl}planets/${id}`).
    pipe( catchError(this.handleError<Planet>('planets')));
  }
  /**
   * Search planets by name
   */
  searchPlanets(name: string): Observable<Planet[]> {
    return this.http.get<Planet[]>(`${swapiUrl}planets/`, {
      params: new HttpParams().set('search', name)
    }).pipe( catchError(this.handleError<Planet[]>('planets')));
  }
  /**
   * Handle HTTP Errors
   */
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
