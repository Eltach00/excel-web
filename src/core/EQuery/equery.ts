import { IEQuery } from './equery.interface';

class EQuery {}

export const $: IEQuery = () => {
  return new EQuery();
};

$.create = (tagName: string, className: string): HTMLElement => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};
