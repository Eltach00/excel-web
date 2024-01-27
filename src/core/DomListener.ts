import { DOMListenerInterface } from '@interfaces';
import { IEQuery } from './EQuery/equery.interface';

export abstract class DomListener {
  protected $root: HTMLElement | IEQuery;
  protected listeners: string | string[];

  constructor(root: HTMLElement | IEQuery, listeners: string | string[]) {
    if (!root) {
      throw new Error('No root element provided');
    }
    this.$root = root;
    this.listeners = listeners;
  }

  protected addListeners(): void {
    if (this.listeners instanceof Array) {
      this.listeners.forEach((listener) => {
        this.$root.addEventListener(listener, (event: any) => {
          console.log('here');
        });
      });
    } else {
      this.$root.addEventListener(this.listeners, () => {});
    }
  }

  protected removeListeners(): void {}
}
