import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Class1Component } from './class1/class1.component';
import { Class2Component } from './class2/class2.component';
import { HeroComponent } from './hero/hero.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    Class1Component,
    Class2Component,
    HeroComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
