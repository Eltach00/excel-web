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

  remove(): this {
    this.$nativeElement.remove();
    return this;
  }

  getTextContent(): string {
    return this.$nativeElement.textContent!;
  }

  find(selector: string): HTMLElement | null {
    return this.$nativeElement.querySelector<HTMLElement>(selector);
  }

  findAll(selector: string): NodeListOf<HTMLElement> {
    return this.$nativeElement.querySelectorAll(selector);
  }

  addEventListener(
    type: string,
    callbackFunction: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions | undefined
  ): this {
    this.$nativeElement.addEventListener(type, callbackFunction, options);
    return this;
  }

  removeEventListener(
    type: string,
    callbackFunction: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions | undefined
  ): this {
    this.$nativeElement.removeEventListener(type, callbackFunction, options);
    return this;
  }

  closest(selector: string): HTMLElement | null {
    return this.$nativeElement.closest(selector);
  }

  getCoords(): DOMRect {
    return this.$nativeElement.getBoundingClientRect();
  }

  setStyles(style: { [key: string]: string | number }): this {
    Object.keys(style).forEach((key) => {
      this.$nativeElement.style[key] = style[key];
    });
    return this;
  }

  addClass(): this {
    this.$nativeElement.classList.add(...arguments);
    return this;
  }

  removeClass(): this {
    this.$nativeElement.classList.remove(...arguments);
    return this;
  }
}

export const $: IEQueryFunction = (selector: string | HTMLElement): IEQuery => {
  return new EQuery(selector);
};

$.create = (tagName: string, className: string = ''): IEQuery => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return $(element);
};
