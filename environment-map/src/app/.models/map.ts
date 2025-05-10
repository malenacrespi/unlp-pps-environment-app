export class Map {

    private cells: number[];
    private rows: number;
    private columns: number;
    private cellDim: number;

    constructor(cells: number[], rows: number, columns: number, cellDim: number) {
        this.cells = cells;
        this.rows = rows;
        this.columns = columns;
        this.cellDim = cellDim;
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

    public getCellDim(): number {
        return this.cellDim;
    }

    public setCellHeight(cellHeight: number): void {
        this.cellDim = cellHeight;
    }

}