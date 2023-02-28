import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdottiComponent } from './prodotti/prodotti.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ProdottiComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
