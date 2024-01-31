import { ExcelComponents } from '../../core/ExcelComponents';
import { ExcelComponentsOptions } from '../../core/interfaces/excel-component.interface';
import { ITable } from './table.interface';

export class Table extends ExcelComponents implements ITable {
  static className = 'excel__table';
  static options: ExcelComponentsOptions = {
    name: 'table',
    listeners: 'input',
  };

  toHTML(): string {
    return `
          <div class="row">
            <div class="row-info"></div>
            <div class="row-data">
              <div class="column">A</div>
              <div class="column">B</div>
              <div class="column">C</div>
            </div>
          </div>
          <div class="row">
            <div class="row-info">1</div>
            <div class="row-data">
              <div class="cell selected" contentEditable="true" spellcheck="false" data-placeholder="A1"></div>
              <div class="cell" contenteditable spellcheck="false">B1</div>
              <div class="cell" contenteditable spellcheck="false">C1</div>
            </div>
          </div>
          <div class="row">
            <div class="row-data">
              <div class="row-info">2</div>
              <div class="cell" contenteditable spellcheck="false">
                A2
              </div>
              <div class="cell" contenteditable spellcheck="false">B2</div>
              <div class="cell" contenteditable spellcheck="false">C2</div>
            </div>
          </div>
        `;
  }
}
