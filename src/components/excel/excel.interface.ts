import { Formula } from '../formula/Formula';
import { Header } from '../header/Header';
import { Table } from '../table/Table';
import { Toolbar } from '../toolbar/Toolbar';

type IComponent =
  | typeof Header
  | typeof Formula
  | typeof Toolbar
  | typeof Table;

export interface IExcel {
  $element: HTMLElement;
  components: IComponent[];
  render(): void;
}

export interface ExcelOptions {
  components: IComponent[];
}
