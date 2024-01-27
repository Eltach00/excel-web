import { $, IEQuery } from '@EQuery';
import {
  ExcelOptions,
  EnteredComponentsInterface,
  ExcelInterface,
  ComponentsInstancesInterface,
} from './excel.interface';

export class Excel implements ExcelInterface {
  $element: IEQuery;
  enteredComponents: EnteredComponentsInterface[];
  componentsInstances: ComponentsInstancesInterface[] = [];

  constructor(element: string, options: ExcelOptions) {
    this.$element = $(element);
    this.enteredComponents = options.components;
  }

  getRoot(): IEQuery {
    const $root = $.create('div', 'excel');

    this.componentsInstances = this.enteredComponents.map(
      (EnteredComponent) => {
        const node = $.create('div', EnteredComponent.className);
        const componentInstance = new EnteredComponent(node, {
          name: 'test',
          listeners: ['input'],
        });
        node.html(componentInstance.toHTML());
        $root.append(node);
        return componentInstance;
      }
    );
    return $root;
  }

  render(): void {
    this.$element.append(this.getRoot());
    this.componentsInstances.forEach((component) => {
      component.initListeners();
    });
  }
}
