import { Injectable } from '@angular/core';
import { Map } from '../.models/map';

@Injectable({
  providedIn: 'root'
})
export class MapDataService {

  private ogm: Map;

  constructor() {
    let cells: number[] = [];
    let rows: number = 5;
    let columns: number = 10;
    let cellHeight: number = 100;
    let cellWidth: number = 100;
    for(let i = 0; i < (rows * columns); i++) {
      cells[i] = Math.floor(Math.random() * 3);
    }
    this.ogm = new Map(cells, rows, columns, cellHeight, cellWidth);
  }

  public getOgm(): Map {
    return this.ogm;
  }

}
