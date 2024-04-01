import { Injectable } from '@angular/core';

declare var require: any;

@Injectable({
  providedIn: 'root',
  
})
export class DataService {

  constructor() { }



  getMonumentsDesc() {
    const monuments: any = require("src/assets/data/monumentos.json");
    return monuments;
  }

  getParquesDesc() {
    const monuments: any = require("src/assets/data/parques.json");
    return monuments;
  }

  getPoiDesc() {
    const monuments: any = require("src/assets/data/poi.json");
    return monuments;
  }

  getRutaUno() {
    const monuments: any = require("src/assets/data/ruta1.json");
    return monuments;
  }

  getRutaDos() {
    const monuments: any = require("src/assets/data/ruta2.json");
    return monuments;
  }
  
  getRutaTres() {
    const monuments: any = require("src/assets/data/ruta3.json");
    return monuments;
  }
  getRutaCuatro() {
    const monuments: any = require("src/assets/data/ruta4.json");
    return monuments;
  }

}
