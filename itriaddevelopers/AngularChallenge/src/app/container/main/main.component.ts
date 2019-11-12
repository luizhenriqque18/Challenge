import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {People, Film, Planet} from '../../shared/swapi/model/swapi.models';
import {SwapiService} from '../../shared/swapi/swapi.service';
import {debounceTime, tap} from 'rxjs/operators';

export interface State {
  id: string;
  name: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  public people$: Observable<People[]> = new Observable();
  public film$: Observable<Film[]> = new Observable();
  public planet$: Observable<Planet[]> = new Observable();

  private selected: string;

  constructor(private swapi: SwapiService) {}

  stateCtrl = new FormControl();
  filteredStates: Observable<People[]>;

  /*private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }*/

  private requestSWAPI(value: string) {
    switch (this.selected) {
      case 'people':
        //this.people$ = this.swapi.getPeople();
        break;
      case 'films':
        //this.film$ = this.swapi.searchFilms(value);
        break;
      case 'planets':
        //this.planet$ = this.swapi.searchPlanets(value);
        break;

      default:
        console.log('erro');
    }
  }

  ngOnInit(): void {
    /*this.swapi.getPlanet(6).subscribe(resp => {
      console.log(resp);
    });*/
    //this.stateCtrl.valueChanges.subscribe(state => this.requestSWAPI(state));
    //this.stateCtrl.valueChanges.pipe(debounceTime(500)).subscribe(state => this.requestSWAPI(state));
    // this.people$.subscribe((resp) => {
    //   console.log(resp);
    // });
  }

  click(name: any) {
    this.selected = name.value;
  }
}
