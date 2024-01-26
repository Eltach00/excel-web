import { ExcelComponent } from '../../core/ExcelComponent';
import { IFormula } from './formula.interface';

export class Formula extends ExcelComponent implements IFormula {
  static className = 'excel__formula';

  toHTML(): string {
    return `
          <span class="info">Fx</span>
          <div contenteditable class="input" spellcheck="false"></div>
        `;
  }
}
