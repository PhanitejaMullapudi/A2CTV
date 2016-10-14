import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/filter-component.html'
})
export class FilterComponent {
  categories: Category[] = CategoriesDB;
}



/**************Categories Class ***************/

export class Category {
  categoryID: number;
  CategoryName: string;
  IsOpend: boolean;
  Items: Array<CategoriesItems>;
}

export class CategoriesItems {
  ItemID: number;
  ItemName: string;
  ischecked: boolean;
}

const CategoriesDB: Category[] = [
  { CategoryName: "Category 1", categoryID: 1, IsOpend: true, Items: [{ ischecked: false, ItemID: 1, ItemName: 'Item 1' }, { ischecked: false, ItemID: 2, ItemName: 'Item 2' }, { ischecked: true, ItemID: 3, ItemName: 'Item 3' }] },
  { CategoryName: "Category 2", categoryID: 2, IsOpend: false, Items: [{ ischecked: false, ItemID: 4, ItemName: 'Item 4' }, { ischecked: false, ItemID: 5, ItemName: 'Item 5' }, { ischecked: true, ItemID: 6, ItemName: 'Item 6' }] },
  { CategoryName: "Category 3", categoryID: 3, IsOpend: true, Items: [{ ischecked: false, ItemID: 7, ItemName: 'Item 7' }, { ischecked: false, ItemID: 8, ItemName: 'Item 8' }, { ischecked: true, ItemID: 9, ItemName: 'Item 9' }] },
  { CategoryName: "Category 4", categoryID: 4, IsOpend: true, Items: [{ ischecked: false, ItemID: 10, ItemName: 'Item 10' }, { ischecked: false, ItemID: 11, ItemName: 'Item 11' }, { ischecked: true, ItemID: 12, ItemName: 'Item 12' }] }
];
