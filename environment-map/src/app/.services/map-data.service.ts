import { Injectable } from '@angular/core';
import { Map } from '../.models/map';

@Injectable({
  providedIn: 'root'
})
export class MapDataService {

  private ogm: Map;

  constructor() {
    // Variables set for debug only
    let roomLenght: number = 500 // [cm] 
    let roomWidth: number = 200 // [cm]
    console.log(`-> ROOM DIMENSION: ${roomLenght}x${roomWidth}`);
    // Creation of Map instance (variables for debug only)
    let cells: number[] = [];
    let rows: number = Math.ceil(roomLenght/5); // Cell size = 5x5cm
    let columns: number = Math.ceil(roomWidth/5); 
    for(let i = 0; i < (rows * columns); i++) {
      cells[i] = Math.floor(Math.random() * 3);
    }
    this.ogm = new Map(cells, rows, columns);
  }

  public getOgm(): Map {
    return this.ogm;
  }

}
