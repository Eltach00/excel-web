import { $, IEQuery } from '@EQuery';
import {
  ExcelOptions,
  ExcelInterface,
  ComponentsInstancesInterface,
  EnteredClassesInterface,
} from './excel.interface';

export class Excel implements ExcelInterface {
  $rootElement: IEQuery;
  enteredClasses: EnteredClassesInterface[];
  componentsInstances: ComponentsInstancesInterface[] = [];

  constructor(rootElement: string, options: ExcelOptions) {
    this.$rootElement = $(rootElement);
    this.enteredClasses = options.components;
    this.render();
  }

  getComponents(): IEQuery {
    const $rootDivElement = $.create('div', 'excel');

    this.componentsInstances = this.enteredClasses.map((EnteredComponent) => {
      const node = $.create('div', EnteredComponent.className);
      const componentInstance = new EnteredComponent(
        node,
        EnteredComponent?.options
      );
      node.html(componentInstance.toHTML());
      $rootDivElement.append(node);
      return componentInstance;
    });
    return $rootDivElement;
  }

  render(): void {
    this.$rootElement.append(this.getComponents());
    this.componentsInstances.forEach((component) => {
      component.initListeners();
    });
  }
}
