export class Map {

    private cells: number[];
    private rows: number;
    private columns: number;
    private cellHeight: number;
    private cellWidth: number;

    constructor(cells: number[], rows: number, columns: number, cellHeight: number, cellWidth: number) {
        this.cells = cells;
        this.rows = rows;
        this.columns = columns;
        this.cellHeight = cellHeight;
        this.cellWidth = cellWidth;
    }

    public getCells(): number[] {
        return this.cells;
    }

    public setCells(cells: number[]): void {
        this.cells = cells;
    }

    public getRows(): number {
        return this.rows;
    }

    public setRows(rows: number): void {
        this.rows = rows;
    }

    public getColumns(): number {
        return this.columns;
    }

    public setColumns(columns: number): void {
        this.columns = columns;
    }

    public getCellHeight(): number {
        return this.cellHeight;
    }

    public setCellHeight(cellHeight: number): void {
        this.cellHeight = cellHeight;
    }

    public getCellWidth(): number {
        return this.cellWidth;
    }

    public setCellWidth(cellWidth: number): void {
        this.cellWidth = cellWidth;
    }

}