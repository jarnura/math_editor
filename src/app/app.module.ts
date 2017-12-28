import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Select2Module } from 'ng2-select2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { SubComponent } from './sub/sub.component';
import { PageComponent } from './page/page.component';
import { ValueComponent } from './value/value.component';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    SubComponent,
    PageComponent,
    ValueComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    Select2Module,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
