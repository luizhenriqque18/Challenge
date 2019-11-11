import { Component, OnInit } from '@angular/core';
import { Angular2SwapiService, People } from 'angular2-swapi';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  film$: Observable<People[]>;

  constructor(private _swapi: Angular2SwapiService) {}

  ngOnInit(): void {
    this.film$ = this._swapi.getPeople();
    this.film$.subscribe(resp => {
      console.log(resp)  ;
    });
  }


}
