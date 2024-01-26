import { IDomListener } from '@interfaces/dom-listener.interface';

export class DomListener implements IDomListener {
  $root: any;
  constructor(root: any) {
    if (!root) {
      throw new Error('No root element provided');
    }
    this.$root = root;
  }
}
