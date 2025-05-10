import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapDataService } from 'src/app/.services/map-data.service';
import { Map } from 'src/app/.models/map';

@Component({
  imports: [CommonModule],
  selector: 'app-ogm',
  templateUrl: './ogm.component.html',
  styleUrls: ['./ogm.component.scss'],
})
export class OgmComponent implements OnInit {

  private ogm!: Map;
  private ogmStyle: any;

  constructor(private mapDataService: MapDataService) { }

  public ngOnInit(): void {
    this.ogm = this.mapDataService.getOgm();
    this.ogmStyle = {
      'grid-template-rows': `repeat(${this.ogm.getRows().toString()},${this.ogm.getCellDim().toString()}px)`,
      'grid-template-columns': `repeat(${this.ogm.getColumns().toString()},${this.ogm.getCellDim().toString()}px)`
    }
  }

  public getOgmStyle(): any {
    return this.ogmStyle;
  }

  public getOgmCells(): number[] {
    return this.ogm.getCells();
  }

  public getOgmCellStyle(cell: any): any {
    switch(cell){
      case 0: return { 'background-color': '#d9d7d7' };   // 0 - Unknown
      case 1: return { 'background-color': '#21d948' };   // 1 - Free
      case 2: return { 'background-color': '#db3623' };   // 2 - Occupied
      default: return { 'background-color': '#d9d7d7' };  // Unknown
    }
  }

}
