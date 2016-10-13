import {Component, Input, OnDestroy} from '@angular/core';
import {Accordion} from './accordion';

@Component({
    selector: 'accordion-group',
    template: `
                <div class="panel panel-popup W500px" [ngClass]="{'panel-open': isOpen}">
                  <div class="panel-heading W500px" (click)="toggleOpen($event)">                     
                      <a class="panel-title W500px" href tabindex="0"><span>{{heading}}</span></a>
                  </div>
                    <div class="panel-body W500px" [hidden]="!isOpen">
                    <div class="P10">
                        <ng-content></ng-content>
                        </div>
                    </div>
                </div>
                <div class="emptyRow">&nbsp;</div>
          `,

})
export class AccordionGroup implements OnDestroy {
    private _isOpen: boolean = false;

    @Input() heading: string;

    @Input()
    set isOpen(value: boolean) {
        this._isOpen = value;
        //if (value) {
            //this.accordion.closeOthers(this);
        //}
    }

    get isOpen() {
        return this._isOpen;
    }

    constructor(private accordion: Accordion) {
        this.accordion.addGroup(this);
    }

    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }

    toggleOpen(event: MouseEvent): void {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    }
}