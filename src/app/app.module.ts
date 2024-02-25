import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import AppComponent from './app.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CardComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AngularMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
