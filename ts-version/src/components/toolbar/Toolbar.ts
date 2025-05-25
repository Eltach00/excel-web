import { ExcelComponents } from '../../core/ExcelComponents';
import { ComponentsOptions } from '../../core/interfaces/excel-component.interface';
import { IToolbar } from './toolbar.interface';

export class Toolbar extends ExcelComponents implements IToolbar {
  static className = 'excel__toolbar';
  static options: ComponentsOptions = {
    name: 'toolbar',
    listeners: ['input'],
  };

  toHTML(): string {
    return `
          <div class="button">
            <i class="material-icons">format_align_left</i>
          </div>

          <div class="button">
            <i class="material-icons">format_align_center</i>
          </div>

          <div class="button">
            <i class="material-icons">format_align_right</i>
          </div>

          <div class="button">
            <i class="material-icons">format_bold</i>
          </div>

          <div class="button">
            <i class="material-icons">format_italic</i>
          </div>

          <div class="button">
            <i class="material-icons">format_underlined</i>
          </div>
        `;
  }

  onInput(event: any): void {
    console.log(this.$root);
  }
}
