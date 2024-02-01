import { ExcelComponents } from '../../core/ExcelComponents';
import { ComponentsOptions } from '../../core/interfaces/excel-component.interface';
import { IFormula } from './formula.interface';

export class Formula extends ExcelComponents implements IFormula {
  static className = 'excel__formula';
  static options: ComponentsOptions = {
    name: 'formula',
    listeners: ['input'],
  };

  toHTML(): string {
    return `
          <span class="info">Fx</span>
          <div contenteditable class="input" spellcheck="false"></div>
        `;
  }

  onInput(event: any): void {
    console.log(this.$root);
  }
}
