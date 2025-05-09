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

  private currentOgm!: Map;
  private currentOgmStyle: any;

  constructor(private mapDataService: MapDataService) { }

  public ngOnInit(): void {
    this.currentOgm = this.mapDataService.getOgm();
    this.currentOgmStyle = {
      'grid-template-rows': `repeat(${this.currentOgm.getRows().toString()},${this.currentOgm.getCellHeight().toString()}px)`,
      'grid-template-columns': `repeat(${this.currentOgm.getColumns().toString()},${this.currentOgm.getCellWidth().toString()}px)`
    }
  }

  public getCurrentOgm(): number[] {
    return this.currentOgm.getCells();
  }

  public getCurrentOgmStyle(): any {
    return this.currentOgmStyle;
  }

  public getCellStyle(cell: any): any {
    switch(cell){
      case 0: return { 'background-color': '#d9d7d7' };
      case 1: return { 'background-color': '#21d948' };
      case 2: return { 'background-color': '#db3623' };
      default: return { 'background-color': '#d9d7d7' };
    }
  }

}
