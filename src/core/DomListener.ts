import { DOMListenerInterface } from '@interfaces';
import { IEQuery } from './EQuery/equery.interface';

export abstract class DomListener implements DOMListenerInterface {
  $root: HTMLElement | IEQuery;
  listeners: string | string[];

  constructor(root: HTMLElement | IEQuery, listeners: string | string[]) {
    if (!root) {
      throw new Error('No root element provided');
    }
    this.$root = root;
    this.listeners = listeners;
  }

  protected addListeners(): void {
    console.log(this.listeners);
  }

  removeListeners(): void {}
}
