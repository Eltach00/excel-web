import { IEQuery, IEQueryFunction } from './equery.interface';

class EQuery implements IEQuery {
  $el: HTMLElement;
  constructor(selector: string | HTMLElement) {
    typeof selector === 'string'
      ? (this.$el = document.querySelector(selector))
      : (this.$el = selector);
  }

  html(): string {
    return '';
  }
}

export const $: IEQueryFunction = (selector: string) => {
  return new EQuery(selector);
};

$.create = (tagName: string, className: string): HTMLElement => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};
