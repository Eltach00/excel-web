import { IExcelComponent } from '@interfaces';
import { DomListener } from './DomListener';

export class ExcelComponent extends DomListener implements IExcelComponent {
  toHTML() {
    return '';
  }
}
