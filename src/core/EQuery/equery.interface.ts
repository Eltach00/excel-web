export interface IEQuery {
  $el: HTMLElement;
}

export interface IEQueryFunction {
  create(tagName: string, className: string): HTMLElement;
}
