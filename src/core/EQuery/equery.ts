import { IEQuery, IEQueryFunction } from './equery.interface';

class EQuery implements IEQuery {
  $nativeElement: HTMLElement;

  constructor(selector: string | HTMLElement) {
    typeof selector === 'string'
      ? (this.$nativeElement = document.querySelector(selector)!)
      : (this.$nativeElement = selector);
  }

  html(html: string): this {
    this.$nativeElement.innerHTML = html;
    return this;
  }

  clear(): this {
    this.html('');
    return this;
  }

  append(node: HTMLElement | string | IEQuery): this {
    if (node instanceof EQuery) {
      this.$nativeElement.append(node.$nativeElement);
    } else if (node instanceof HTMLElement || typeof node === 'string') {
      this.$nativeElement.append(node);
    }
    return this;
  }

  addEventListener(type: string, functionName: any, options?: any): this {
    this.$nativeElement.addEventListener(type, functionName, options);
    return this;
  }
}

export const $: IEQueryFunction = (selector: string | HTMLElement): IEQuery => {
  return new EQuery(selector);
};

$.create = (tagName: string, className: string): IEQuery => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return $(element);
};
