import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Select2Module } from 'ng2-select2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { SubComponent } from './sub/sub.component';
import { PageComponent } from './page/page.component';
import { ValueComponent } from './value/value.component';
import { DisplayComponent } from './display/display.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { DivisionComponent } from './division/division.component';
import { PowerofComponent } from './powerof/powerof.component';
import { SquarerootComponent } from './squareroot/squareroot.component';
import { PageService } from './page/page.service';
import { Sub1Component } from './page/sub1/sub1.component';
import { TypeAheadModule } from '../../node_modules/ng2-bootstrap-typeahead/src/typeahead.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    SubComponent,
    PageComponent,
    ValueComponent,
    DisplayComponent,
    MultiplyComponent,
    DivisionComponent,
    PowerofComponent,
    SquarerootComponent,
    Sub1Component
  ],
  imports: [
    BrowserModule,
    Select2Module,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    TypeAheadModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
