import { ExcelComponentsInterface, ExcelComponentsOptions } from '@interfaces';
import { DomListener } from './DomListener';
import { IEQuery } from '@EQuery';

export abstract class ExcelComponents
  extends DomListener
  implements ExcelComponentsInterface
{
  constructor(root: HTMLElement | IEQuery, options: ExcelComponentsOptions) {
    super(root, options.listeners);
  }

  toHTML() {
    return '';
  }

  initListeners(): void {
    this.addListeners();
  }
}
