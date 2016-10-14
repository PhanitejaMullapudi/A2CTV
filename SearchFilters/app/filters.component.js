"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FilterComponent = (function () {
    function FilterComponent() {
        this.categories = CategoriesDB;
    }
    FilterComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/filter-component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;
/**************Categories Class ***************/
var Category = (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
var CategoriesItems = (function () {
    function CategoriesItems() {
    }
    return CategoriesItems;
}());
exports.CategoriesItems = CategoriesItems;
var CategoriesDB = [
    { CategoryName: "Category 1", categoryID: 1, IsOpend: true, Items: [{ ischecked: false, ItemID: 1, ItemName: 'Item 1' }, { ischecked: false, ItemID: 2, ItemName: 'Item 2' }, { ischecked: true, ItemID: 3, ItemName: 'Item 3' }] },
    { CategoryName: "Category 2", categoryID: 2, IsOpend: false, Items: [{ ischecked: false, ItemID: 4, ItemName: 'Item 4' }, { ischecked: false, ItemID: 5, ItemName: 'Item 5' }, { ischecked: true, ItemID: 6, ItemName: 'Item 6' }] },
    { CategoryName: "Category 3", categoryID: 3, IsOpend: true, Items: [{ ischecked: false, ItemID: 7, ItemName: 'Item 7' }, { ischecked: false, ItemID: 8, ItemName: 'Item 8' }, { ischecked: true, ItemID: 9, ItemName: 'Item 9' }] },
    { CategoryName: "Category 4", categoryID: 4, IsOpend: true, Items: [{ ischecked: false, ItemID: 10, ItemName: 'Item 10' }, { ischecked: false, ItemID: 11, ItemName: 'Item 11' }, { ischecked: true, ItemID: 12, ItemName: 'Item 12' }] }
];
//# sourceMappingURL=filters.component.js.map