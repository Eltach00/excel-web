export interface IEQuery {
  $nativeElement: HTMLElement;
  html(html: string): this | string;
  clear(): this;
  append(node: Node | string | IEQuery): this;
}

export interface IEQueryFunction {
  (selector: string | HTMLElement): IEQuery;
  create(tagName: string, className: string): IEQuery;
}
