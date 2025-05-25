import { ComponentsOptions } from '@interfaces';
import { DomListener } from './DomListener';
import { IEQuery } from '@EQuery';

export abstract class ExcelComponents extends DomListener {
  constructor(root: IEQuery, options: ComponentsOptions) {
    super(root, options);
  }

  toHTML(): string {
    return '';
  }

  init(): void {
    this.addListeners();
  }

  destroyListeners(): void {
    this.removeListeners();
  }

}
