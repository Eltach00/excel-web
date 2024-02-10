import { IEQuery } from "../../../core/EQuery/equery.interface"

export interface ITableSelection{
    select($el: IEQuery): void
    selectGroup($elements: IEQuery[]): void
    selectedItems: IEQuery[]
}