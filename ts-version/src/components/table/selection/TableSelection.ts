import { IEQuery } from '../../../core/EQuery/equery.interface';
import { ITableSelection } from './tableSelection.interface';

export class TableSelecetion implements ITableSelection {
  selectedItems: IEQuery[] = [];
  private selectedClassName: string = 'selected';

  select($el: IEQuery): void {
    this.selectedItems = this.selectedItems.filter((selected) => {
      if (selected.$nativeElement !== $el.$nativeElement) {
        selected.removeClass(this.selectedClassName);
        return false;
      }
    });

    this.selectedItems.push($el);
    $el.addClass(this.selectedClassName);
  }

  selectGroup($elements: IEQuery[]): void {}
}
