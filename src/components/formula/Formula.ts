import { ExcelComponents } from '../../core/ExcelComponents';
import { IFormula } from './formula.interface';

export class Formula extends ExcelComponents implements IFormula {
  static className = 'excel__formula';

  toHTML(): string {
    return `
          <span class="info">Fx</span>
          <div contenteditable class="input" spellcheck="false"></div>
        `;
  }
}
