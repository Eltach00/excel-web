import { $, IEQuery } from '@EQuery';
import { ExcelOptions, IExcel } from './excel.interface';

export class Excel implements IExcel {
  $element: IEQuery;
  components;
  constructor(element: string, options: ExcelOptions) {
    this.$element = $(element);
    this.components = options.components;
  }

  getRoot(): IEQuery {
    const $root = $.create('div', 'excel');

    this.components.forEach((Component) => {
      const node = $.create('div', Component.className);
      node.html(new Component(node).toHTML());
      $root.append(node);
    });
    return $root;
  }

  render(): void {
    this.$element.append(this.getRoot());
  }
}
