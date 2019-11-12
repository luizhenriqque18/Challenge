import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2SwapiModule } from 'angular2-swapi';
import {MatInputModule} from '@angular/material';
import { MainComponent } from './module/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Angular2SwapiModule,
    MatInputModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
