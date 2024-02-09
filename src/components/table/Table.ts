import { $ } from '@EQuery';
import { ExcelComponents } from '../../core/ExcelComponents';
import { ComponentsOptions } from '../../core/interfaces/excel-component.interface';
import { ITable } from './table.interface';
export class Table extends ExcelComponents implements ITable {
  static className = 'excel__table';
  static options: ComponentsOptions = {
    name: 'Table',
    listeners: ['mousedown'],
  };

  private countsRow = 40;

  private CODES = {
    A: 65,
    Z: 90,
  };

  // constructor() {
  // this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
  // }

  toHTML(): string {
    return this.createTemplate(this.countsRow);
  }

  onClick(event: any): void {}

  onMousedown(event: any): void {
    if (event.target.dataset.resize === 'col') {
      this.columnResizeHandle(event);
      // document.addEventListener('mousemove', this.mouseMoveHandler);
    } else if (event.target.dataset.resize === 'row') {
      this.rowResizeHandle(event);
    }
  }

  private columnResizeHandle(event): void {
    const $target = $(event.target);

    const $resizableCol = $($target.closest('[data-type="resizableCol"]')!);

    const colNumber = $resizableCol.$nativeElement.dataset.colNumber;
    const resizableCellsList = this.$root.querySelectorAll<HTMLElement>(
      `[data-type="${colNumber}"]`
    );

    const coords = $target.getCoords();

    const $line = $.create('div', 'col-resize-line');
    $line.setStyles({ left: coords.left + 'px' });
    this.$root.append($line.$nativeElement);

    const originalWidth = $resizableCol.getCoords().width;

    let delta: number;
    document.onmousemove = (e) => {
      $line.setStyles({
        left: e.pageX + 'px'
      });
      delta = e.screenX - coords.right;
    };

    document.onmouseup = () => {
      $resizableCol.setStyles({
        width: originalWidth + delta + 'px',
      });

      resizableCellsList.forEach((cell) => {
        $(cell).setStyles({
          width: originalWidth + delta + 'px',
        });
      });

      $line.remove();
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }

  private rowResizeHandle(event: any) {
    const $target = $(event.target);

    const $resizableRow = $($target.closest('[data-type="resizableRow"]')!);

    const $lineRowElement = $.create('div', 'row-resize-line');
    $resizableRow.append($lineRowElement);

    const coords = $resizableRow.getCoords();

    const originalHeight = coords.height;

    document.onmousemove = (e) => {
      const delta = e.pageY - coords!.bottom;
      $resizableRow.setStyles({
        height: originalHeight + delta + 'px',
      });
    };

    document.onmouseup = () => {
      $lineRowElement.remove();
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }

  // ### another resolving with using bind(this)

  // onMouseup(event: any): void {
  //   document.removeEventListener('mousemove', this.mouseMoveHandler);
  // }

  // private mouseMoveHandler(event): void {
  //   const delta = event.pageX - this.coords!.right;
  //   this.$resizableElement!.$nativeElement.style.width =
  //     this.originalWidth! + delta + 'px';
  // }

  private createTemplate(countRows: number): string {
    const columnsCount = this.CODES.Z - this.CODES.A + 1;

    const columns: string[] = new Array(columnsCount)
      .fill('')
      .map((column, i) => {
        return this.createColumn(String.fromCharCode(this.CODES.A + i), i);
      });

    const cells: string[] = new Array(columnsCount).fill('').map((cell, i) => {
      // return this.createCell(`${String.fromCharCode(this.CODES.A + index)}${index + 1}`);
      return this.createCell(i);
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
    return /*html*/ `<div class="row" data-type='resizableRow'>
    ${
      infoContent
        ? `<div class="row-info" >
            ${infoContent}
            <div class="row-resize" data-resize="row"></div>
          </div>`
        : `<div class="row-info"></div>`
    }
      <div class="row-data">${dataContent}
      </div>
    </div>`;
  }

  private createColumn(columnLetters: string, index: number): string {
    return /*html*/ `<div class="column" data-type="resizableCol" data-col-number="${index}">${columnLetters}
    <div class="column-resize" data-resize="col"></div>
    </div>
    `;
  }

  private createCell(index: number, placeHolderData: string = ''): string {
    return `<div
      class="cell"
      contenteditable
      data-type="${index}"
      data-placeholder="${placeHolderData}"></div>`;
  }
}
