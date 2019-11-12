import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SwapiService} from '../../shared/swapi/swapi.service';

@NgModule({
  declarations: [
    MainComponent
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
