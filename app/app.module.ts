import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { routing } from './app.routing';
import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';

@NgModule({
  imports:      
  [BrowserModule, 
  FormsModule, 
  routing,
  HttpModule],
  declarations: [
  AppComponent,
  DashboardComponent,
  HeroDetailComponent,
  HeroesComponent],
  bootstrap:    [ AppComponent ],
  providers: [HeroService]
})


export class AppModule { }
