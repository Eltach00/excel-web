import { IEQuery } from '@EQuery';

export interface DOMListenerInterface {
  $root: HTMLElement | IEQuery;
  listeners: string | string[];
  removeListeners(): void;
}
