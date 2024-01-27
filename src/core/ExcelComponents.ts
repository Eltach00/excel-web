import { IExcelComponents } from '@interfaces';
import { DomListener } from './DomListener';

export class ExcelComponents extends DomListener implements IExcelComponents {
  toHTML() {
    return '';
  }
}
