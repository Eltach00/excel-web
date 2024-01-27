import { IEQuery } from '@EQuery';
import { Formula } from '../formula/Formula';
import { Header } from '../header/Header';
import { Table } from '../table/Table';
import { Toolbar } from '../toolbar/Toolbar';

export type EnteredComponentsInterface =
  | typeof Header
  | typeof Formula
  | typeof Toolbar
  | typeof Table;

export type ComponentsInstancesInterface = Header | Formula | Toolbar | Table;
export interface ExcelInterface {
  $element: IEQuery;
  enteredComponents: EnteredComponentsInterface[];
  componentsInstances: ComponentsInstancesInterface[];
  getRoot(): IEQuery;
  render(): void;
}

export interface ExcelOptions {
  components: EnteredComponentsInterface[];
}
