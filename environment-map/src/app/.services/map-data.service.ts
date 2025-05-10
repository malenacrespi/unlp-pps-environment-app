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
    let rows: number = Math.ceil(roomLenght/5);
    let columns: number = Math.ceil(roomWidth/5); 
    let cellDim: number = 50; // 5cm = 50px
    for(let i = 0; i < (rows * columns); i++) {
      cells[i] = Math.floor(Math.random() * 3);
    }
    this.ogm = new Map(cells, rows, columns, cellDim);
  }

  public getOgm(): Map {
    return this.ogm;
  }

}
