import { IExcelComponent } from '@interfaces/excel-component.interface';
import { DomListener } from './DomListener';

export class ExcelComponent extends DomListener implements IExcelComponent {
  toHTML() {
    return '';
  }
}
