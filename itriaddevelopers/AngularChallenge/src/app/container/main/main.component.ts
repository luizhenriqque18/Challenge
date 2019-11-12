import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {People, Film, Planet} from '../../shared/swapi/model/swapi.models';
import {SwapiService} from '../../shared/swapi/swapi.service';
import {debounceTime, map, tap} from 'rxjs/operators';
import {MatRadioChange} from '@angular/material';
import Cart from './model/cart';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  private selected: string;

  constructor(private swapi: SwapiService) {}

  stateCtrl = new FormControl();
  filteredStates: Observable<any> = new Observable();
  states: Array<any>;

  /*private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }*/

  /*private requestSWAPI(value: string) {
    switch (this.selected) {
      case 'people':
        this.people$ = this.swapi.getPeoples();
        break;
      case 'films':
        this.film$ = this.swapi.searchFilms(value);
        break;
      case 'planets':
        this.planet$ = this.swapi.searchPlanets(value);
        break;

      default:
        console.log('erro');
    }
  }*/

  ngOnInit(): void {
    this.stateCtrl.valueChanges.pipe(debounceTime(500)).subscribe((resp) => {
      console.log(resp);
    });

    this.filteredStates.subscribe( resp => {
        this.states = resp;
    });
  }

  click(name: MatRadioChange) {
    switch (name.value) {
      case 'people':
        this.swapi.getPeoples().subscribe( resp => {
          this.states = resp;
        });
        break;
      case 'films':
        this.swapi.getFilms().subscribe( resp => {
          this.states = resp;
        });
        break;
      case 'planets':
        this.swapi.getPlanets().subscribe( resp => {
          this.states = resp;
        });
        break;

      default:
        console.log('erro');
    }
  }
}
