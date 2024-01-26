import { $ } from '@EQuery';
import { ExcelOptions, IExcel } from './excel.interface';

export class Excel implements IExcel {
  $element: HTMLElement;
  components;
  constructor(element: string, options: ExcelOptions) {
    this.$element = document.querySelector(element);
    this.components = options.components;
  }

  getRoot(): HTMLElement {
    const $root = $.create('div', 'excel');
    this.components.forEach((Component) => {
      const node = document.createElement('div');
      node.className = Component.className;
      node.innerHTML = new Component(node).toHTML();

      $root.insertAdjacentElement('beforeend', node);
    });
    return $root;
  }

  render(): void {
    this.$element.append(this.getRoot());
  }
}
