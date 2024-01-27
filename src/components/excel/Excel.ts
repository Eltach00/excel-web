import { $, IEQuery } from '@EQuery';
import {
  ExcelOptions,
  EnteredComponentsInterface,
  ExcelInterface,
  ComponentsInstanceInterface,
} from './excel.interface';

export class Excel implements ExcelInterface {
  $element: IEQuery;
  enteredComponents: EnteredComponentsInterface[];
  componentsInstance: ComponentsInstanceInterface[] = [];

  constructor(element: string, options: ExcelOptions) {
    this.$element = $(element);
    this.enteredComponents = options.components;
  }

  getRoot(): IEQuery {
    const $root = $.create('div', 'excel');

    this.componentsInstance = this.enteredComponents.map((EnteredComponent) => {
      const node = $.create('div', EnteredComponent.className);
      const componentInstance = new EnteredComponent(node);
      node.html(componentInstance.toHTML());
      $root.append(node);
      return componentInstance;
    });
    return $root;
  }

  render(): void {
    this.$element.append(this.getRoot());
    this.componentsInstance.forEach((component) => {
      component.initListeners();
    });
  }
}
