export interface IEQuery {
  $nativeElement: HTMLElement;
  html(html: string): this | string;
  clear(): this;
  append(node: HTMLElement | string | IEQuery): this;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions | undefined
  ): this;
  removeEventListener(
    type: string,
    callbackFunction: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions | undefined
  ): this;
  closest(selector: string): HTMLElement | null;
  getCoords(): DOMRect;
  remove(): this;
  getTextContent(): string;
  findAll(selector: string): NodeListOf<HTMLElement>;
  setStyles(style: { [key: string]: string | number }): this;
  addClass([]): this;
  removeClass([]): this;
  find(selector: string): HTMLElement | null;
}

export interface IEQueryFunction {
  (selector: string | HTMLElement): IEQuery;
  create(tagName: string, className?: string): IEQuery;
}
