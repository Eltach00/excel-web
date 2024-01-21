import { Formula } from '../formula/Formula';
import { Header } from '../header/Header';
import { Table } from '../table/Table';
import { Toolbar } from '../toolbar/Toolbar';

type InterfaceComponent =
  | typeof Header
  | typeof Formula
  | typeof Toolbar
  | typeof Table;

export interface IExcel {
  $element: HTMLElement;
  components: InterfaceComponent[];
}

export interface ExcelOptions {
  components: InterfaceComponent[];
}
