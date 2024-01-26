import { ExcelOptions, IExcel } from './excel.interface';

export class Excel implements IExcel {
  $element: HTMLElement;
  components;
  constructor(element: string, options: ExcelOptions) {
    this.$element = document.querySelector(element);
    this.components = options.components;
  }

  render(): void {
    const header = document.createElement('h1');
    header.textContent = 'test';
    this.$element.insertAdjacentElement('afterbegin', header);
  }
}
