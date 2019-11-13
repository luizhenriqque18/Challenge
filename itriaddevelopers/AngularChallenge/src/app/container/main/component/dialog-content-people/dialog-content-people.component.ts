import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {People, Film} from '../../../../shared/swapi/model/swapi.models';
import {SwapiService} from '../../../../shared/swapi/swapi.service';

@Component({
  selector: 'app-dialog-content-people',
  templateUrl: './dialog-content-people.component.html',
  styleUrls: ['./dialog-content-people.component.css']
})
export class DialogContentPeopleComponent implements OnInit {

  public films: Array<Film>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: People,
              private swapi: SwapiService) {  }

  ngOnInit(): void {
    this.swapi.getUrlFilms(this.data.films[0]).subscribe( resp => {
      this.films = resp;
    });
  }
}
