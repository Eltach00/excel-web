import { IEQuery } from './EQuery/equery.interface';
import { capitalize } from './helpers/capitalize';
import { ComponentsOptions } from './interfaces/excel-component.interface';

export abstract class DomListener {
  protected $root: IEQuery;
  protected listeners: string[];
  protected name: string;

  constructor(root: IEQuery, options: ComponentsOptions) {
    if (!root) {
      throw new Error('No root element provided');
    }
    this.$root = root;
    this.listeners = options.listeners;
    this.name = options.name;
  }

  protected addListeners(): void {
    this.listeners.forEach((listener) => {
      const methodName = this.getMethodName(listener);
      if (!this[methodName]) {
        throw new Error(
          `Method ${methodName} not implemented on ${this.name} Component`
        );
      }
      this[methodName] = this[methodName]?.bind(this);
      this.$root.addEventListener(listener, this[methodName]);
    });
  }

  private getMethodName(listenerName: string): string {
    return 'on' + capitalize(listenerName);
  }

  protected removeListeners(): void {
    this.listeners.forEach((listener) => {
      const methodName = this.getMethodName(listener);
      this.$root.removeEventListener(listener, this[methodName]);
    });
  }
}
