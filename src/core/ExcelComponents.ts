import { ComponentsOptions } from '@interfaces';
import { DomListener } from './DomListener';
import { IEQuery } from '@EQuery';

export abstract class ExcelComponents extends DomListener {
  constructor(root: HTMLElement | IEQuery, options: ComponentsOptions) {
    super(root, options);
  }

  toHTML(): string {
    return '';
  }

  initListeners(): void {
    this.addListeners();
  }

  destroyListeners(): void {
    this.removeListeners();
  }

}
