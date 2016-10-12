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
/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
var core_1 = require('@angular/core');
var Angular2Accordion = (function () {
    function Angular2Accordion() {
        this.isGroupOpen = false;
        this.groups = [
            {
                heading: 'Angular2Accordion Dynamic Content A',
                content: ' I’m a dynamic content to show in angular 2 accordion : )'
            },
            {
                heading: 'Angular2Accordion Dynamic Content B',
                content: 'I’m a dynamic content to show in angular 2 accordion : )'
            },
            {
                heading: 'Angular2Accordion HTML Content C',
                content: 'I’m a dynamic content to show in angular 2 accordion : ) '
            }
        ];
    }
    Angular2Accordion.prototype.removeAngular2AccordionGroup = function () {
        this.groups.splice(1, 1);
    };
    Angular2Accordion.prototype.addAngular2AccordionGroup = function () {
        var accordionGroupContent = { heading: 'Hi New Content !', content: 'Content angular 2 accordion ' };
        this.groups.splice(1, 0, accordionGroupContent);
    };
    Angular2Accordion = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n                <p>\n                  <button type=\"button\" class=\"btn btn-default\" (click)=\"removeAngular2AccordionGroup()\">\n                    Remove a group from the dynamic content!\n                  </button>\n                   <button type=\"button\" class=\"btn btn-default\" (click)=\"addAngular2AccordionGroup()\">\n                    Add Content!\n                  </button>\n                </p>\n\n                <accordion>\n                  <accordion-group heading=\"First Group Header \" isGroupOpen=\"true\">\n                    Introduction\n                  </accordion-group>\n                  <accordion-group [heading]=\"group.heading\" *ngFor=\"let group of groups\">\n                    {{group.content}}\n                  </accordion-group>\n                  <accordion-group heading=\"Last Group Header\" [isGroupOpen]=\"isGroupOpen\">\n                    Additional Information\n                  </accordion-group>\n                </accordion>\n             "
        }), 
        __metadata('design:paramtypes', [])
    ], Angular2Accordion);
    return Angular2Accordion;
}());
exports.Angular2Accordion = Angular2Accordion;
//# sourceMappingURL=accordion-example.js.map