import { ExcelComponents } from '../../core/ExcelComponents';
import { ComponentsOptions } from '../../core/interfaces/excel-component.interface';
import { ITable } from './table.interface';
export class Table extends ExcelComponents implements ITable {
  static className = 'excel__table';
  static options: ComponentsOptions = {
    name: 'Table',
    listeners: ['click', 'mousedown', 'mouseup'],
  };

  private countsRow = 26;

  private CODES = {
    A: 65,
    Z: 90,
  };

  toHTML(): string {
    return this.createTemplate(this.countsRow);
  }

  onClick(event: any): void {
    console.log('click');
  }

  onMousedown(event: any): void {
    this.listeners.push('mousemove');
    console.log('mousedown');
  }

  onMousemove(event: any): void {
    console.log('mousemove');
  }

  onMouseup(event: any): void {
    console.log('mouseup');
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
    ${
      infoContent
      ? `<div class="row-info">
            ${infoContent}
            <div class="row-resize"></div>
          </div>`
        : `<div class="row-info">${infoContent}</div>`
    }
      <div class="row-data">${dataContent}</div>
    </div>`;
  }

  private createColumn(columnLetters: string): string {
    return /*html*/ `<div class="column">${columnLetters}
    <div class="column-resize"></div>
    </div>`;
  }

  private createCell(placeHolderData: string = ''): string {
    return `<div
      class="cell"
      contenteditable
      data-placeholder="${placeHolderData}"></div>`;
  }
}
