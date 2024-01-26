import { ExcelComponent } from '../../core/ExcelComponent';
import { IHeader } from './header.interface';

export class Header extends ExcelComponent implements IHeader {
  static className = 'excel__header';

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
