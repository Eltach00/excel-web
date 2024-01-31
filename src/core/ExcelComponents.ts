import { ExcelComponentsOptions } from '@interfaces';
import { DomListener } from './DomListener';
import { IEQuery } from '@EQuery';

export abstract class ExcelComponents extends DomListener {
  constructor(root: HTMLElement | IEQuery, options: ExcelComponentsOptions) {
    super(root, options.listeners);
  }

  toHTML(): string {
    return '';
  }

  initListeners(): void {
    this.addListeners();
  }
}
