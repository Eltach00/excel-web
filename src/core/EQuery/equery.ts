import { IEQuery, IEQueryFunction } from './equery.interface';

class EQuery implements IEQuery {
  $nativeElement: HTMLElement;
  constructor(selector: string | HTMLElement) {
    typeof selector === 'string'
      ? (this.$nativeElement = document.querySelector(selector))
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

  append(node: Node | string | IEQuery): this {
    if (node instanceof EQuery) {
      node = node.$nativeElement;
    }
    if (Element.prototype.append) {
      this.$nativeElement.append(node as Node | string);
    } else {
      this.$nativeElement.appendChild(node as Node);
    }
    return this;
  }
}

export const $: IEQueryFunction = (selector: string): IEQuery => {
  return new EQuery(selector);
};

$.create = (tagName: string, className: string): IEQuery => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return $(element);
};
