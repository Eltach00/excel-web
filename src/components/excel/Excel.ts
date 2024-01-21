import { ExcelOptions, IExcel } from './excel.interface';

export class Excel implements IExcel {
  $element: HTMLElement;
  components;
  constructor(element: string, options: ExcelOptions) {
    this.$element = document.querySelector(element);
    this.components = options.components;
  }
}
