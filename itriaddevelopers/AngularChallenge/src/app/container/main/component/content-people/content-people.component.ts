import {Component, Input, OnInit} from '@angular/core';
import {SwapiService} from '../../../../shared/swapi/swapi.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {MatRadioChange} from '@angular/material';
import {People} from '../../../../shared/swapi/model/swapi.models';

@Component({
  selector: 'app-content-people',
  templateUrl: './content-people.component.html',
  styleUrls: ['./content-people.component.css']
})
export class ContentPeopleComponent implements OnInit {

  constructor(private swapi: SwapiService) {}

  @Input() data: Array<People>;

  stateCtrl = new FormControl();
  filteredStates: Observable<any> = new Observable();
  states: Array<any>;

  ngOnInit(): void {
    this.stateCtrl.valueChanges.pipe(debounceTime(500)).subscribe((resp) => {
      this.swapi.searchPeople(resp).subscribe( a => {
        this.states = a;
        console.log(this.states);
      });
    });

    this.filteredStates.subscribe( resp => {
      this.states = resp;
    });
  }

  click(name: MatRadioChange) {
    switch (name.value) {
      case 'people':
        this.swapi.getPeoples().subscribe( resp => {
          const { } = resp;
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
