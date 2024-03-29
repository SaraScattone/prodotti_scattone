import { Component } from '@angular/core';
import { IProdotto } from '../lista-prodotti';
import { PRODOTTI } from './lista-prodotti.component';
import { ProdottiService } from './prodotti.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./prodotti.component.css'],
})
export class ProdottiComponent {
  prodotti = PRODOTTI;
  imm: boolean = false;
  private _listFilter: string = '';
  prodottiFiltrati: IProdotto[] = [];

  constructor(private prodottiServizio: ProdottiService) {}

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.prodottiFiltrati = this.datiFiltrati(value);
  }

  datiFiltrati(filtratoPer: string): IProdotto[] {
    filtratoPer = filtratoPer.toLocaleLowerCase();
    return this.prodotti.filter((prod: IProdotto) =>
      prod.productName.toLocaleLowerCase().includes(filtratoPer)
    );
  }

  Immagine() {
    this.imm = !this.imm;
    if (this.imm) {
      document.getElementById('bottone').innerHTML = 'Nacondi immagini';
    } else {
      document.getElementById('bottone').innerHTML = 'Mostra immagini';
    }
  }

  ngOnInit() {
    console.log('lista creata');
    this.listFilter = '';
    this.prodotti = this.prodottiServizio.getProdotti();
  }

  fromStelle: string = '';
  onStelleClick(valore: string): void {
    this.fromStelle = valore;
  }
}
