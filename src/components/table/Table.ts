import { ExcelComponents } from '../../core/ExcelComponents';
import { ComponentsOptions } from '../../core/interfaces/excel-component.interface';
import { ITable } from './table.interface';
export class Table extends ExcelComponents implements ITable {
  static className = 'excel__table';
  static options: ComponentsOptions = {
    name: 'Table',
    listeners: ['input'],
  };

  private countsRow = 26;
  
  private CODES = {
    A: 65,
    Z: 90,
  };

  toHTML(): string {
    return this.createTemplate(this.countsRow);
  }

  onInput(event: any): void {
    console.log(this.$root);
  }

  private createTemplate(countRows: number): string {
    const columnsCount = this.CODES.Z - this.CODES.A + 1;

    const columns: string[] = new Array(columnsCount)
      .fill('')
      .map((column, i) => {
        return this.createColumn(String.fromCharCode(this.CODES.A + i));
      });

    const cells: string[] = new Array(columnsCount)
      .fill('')
      .map((cell, index) => {
        // return this.createCell(`${String.fromCharCode(this.CODES.A + index)}${index + 1}`);
        return this.createCell();
      });

    const firtsRow = this.createRow(columns.join(''));
    const rows: string[] = [firtsRow];
    for (let i = 1; i <= countRows; i++) {
      rows.push(this.createRow(cells.join(''), i));
    }

    return rows.join('');
  }

  private createRow(
    dataContent: string,
    infoContent: string | number = ''
  ): string {
    return `<div class="row">
      <div class="row-info">${infoContent}</div>
      <div class="row-data">${dataContent}</div>
    </div>`;
  }

  private createColumn(columnLetters: string): string {
    return ` <div class="column">${columnLetters}</div>`;
  }

  private createCell(placeHolderData: string = ''): string {
    return `<div
      class="cell"
      contenteditable
      data-placeholder="${placeHolderData}"></div>`;
  }
}
