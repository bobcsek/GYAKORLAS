import { Component } from '@angular/core';

@Component({
  selector: 'app-fooldal',
  standalone: false,
  templateUrl: './fooldal.html',
  styleUrl: './fooldal.css',
})
export class Fooldal {
  azonosito: string = "";
  item: string = "";
  darabszam: number = 0;
  rendelheto: boolean = true;

  termekek: Termek[] = [];

  felvitel():void{
    var objektum: Termek = {
      azonosito: this.azonosito,
      item: this.item,
      darabszam: this.darabszam,
      rendelheto: this.rendelheto
    }
    this.termekek.push(objektum);
  }
}


export interface Termek{
  azonosito: string;
  item: string;
  darabszam: number;
  rendelheto: boolean;
}
