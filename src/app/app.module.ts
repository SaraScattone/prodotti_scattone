import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ConvertToSpacePipe } from './condivisa/convert-to-space.pipe';
import { StellaComponent } from './condivisa/stella.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ProdottiComponent,
    ConvertToSpacePipe,
    StellaComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
