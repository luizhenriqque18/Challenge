import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SwapiService} from '../../shared/swapi/swapi.service';
import {CardComponent} from './component/card/card.component';
import {CardListComponent} from './component/card-list/card-list.component';

@NgModule({
  declarations: [
    MainComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    MainComponent
  ],
  providers: [SwapiService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }
