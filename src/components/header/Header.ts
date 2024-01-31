import { ExcelComponents } from '../../core/ExcelComponents';
import { ExcelComponentsOptions } from '../../core/interfaces/excel-component.interface';
import { IHeader } from './header.interface';

export class Header extends ExcelComponents implements IHeader {
  static className = 'excel__header';
  static options: ExcelComponentsOptions = {
    name: 'header',
    listeners: 'input',
  };

  toHTML(): string {
    return `<input type="text" class="input" placeholder="New Table" />
          <div class="buttons-group">
            <div class="button">
              <span class="material-symbols-outlined"> delete </span>
            </div>
            <div class="button">
              <span class="material-symbols-outlined"> exit_to_app </span>
            </div>
          </div>`;
  }
}
