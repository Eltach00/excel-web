export interface IEQuery {
  $nativeElement: HTMLElement;
  html(html: string): this | string;
  clear(): this;
  append(node: HTMLElement | string | IEQuery): this;
  addEventListener(type: string, listener: any, options?: any): this;
}

export interface IEQueryFunction {
  (selector: string | HTMLElement): IEQuery;
  create(tagName: string, className: string): IEQuery;
}
