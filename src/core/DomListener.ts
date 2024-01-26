import { IDomListener } from '@interfaces';

export class DomListener implements IDomListener {
  $root: any;
  constructor(root: any) {
    if (!root) {
      throw new Error('No root element provided');
    }
    this.$root = root;
  }
}
