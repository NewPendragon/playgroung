import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { PlaygroundComponent } from './pages/playground/playground.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { Box1Component } from './components/box1/box1.component';
import { Box2Component } from './components/box2/box2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaygroundComponent,
    Box1Component,
    Box2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
