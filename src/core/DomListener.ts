import { ComponentsInstancesInterface, EnteredClassesInterface } from '../components/excel/excel.interface';
import { IHeader } from '../components/header/header.interface';
import { IEQuery } from './EQuery/equery.interface';
import { capitalize } from './helpers/capitalize';

export abstract class DomListener {
  protected $root: HTMLElement | IEQuery;
  protected listeners?: string | string[];

  constructor(root: HTMLElement | IEQuery, listeners?: string | string[]) {
    if (!root) {
      throw new Error('No root element provided');
    }
    this.$root = root;
    this.listeners = listeners;
  }

  protected addListeners(): void {
    if (this.listeners instanceof Array) {
      this.listeners.forEach((listener) => {
        const methodName = this.getMethodName(listener)
        this.$root.addEventListener(
          listener,
          (this as unknown as ComponentsInstancesInterface)[methodName]
        );
      });
    } else {
      this.$root.addEventListener(this.listeners!, () => {
        console.log(this);
      });
    }
  }

  private getMethodName(listenerName: string): string { 
    return 'on' + capitalize(listenerName);
  }

  protected removeListeners(): void {}
}
