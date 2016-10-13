import { Component } from '@angular/core';
import {Accordion} from './accordion';
import {AccordionGroup} from './accordion-group';


@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
  
 
})

export class AppComponent  {
    isGroupOpen = false;

    groups: Array<any> = [
        {
            id:1,
            heading: 'Angular2Accordion Dynamic Content A',
            content: ' I’m a dynamic content to show in angular 2 accordion : )'
        },
        {
            id:2,
            heading: 'Angular2Accordion Dynamic Content B',
            content: 'I’m a dynamic content to show in angular 2 accordion : )'
        },
        {
            id:3,
            heading: 'Angular2Accordion HTML Content C',
            content: 'I’m a dynamic content to show in angular 2 accordion : ) '
        }
    ];

    removeAngular2AccordionGroup() {
        this.groups.splice(1,1);
    }

    addAngular2AccordionGroup() {
        let accordionGroupContent = {heading:'Hi New Content !', content:'Content angular 2 accordion '};
        this.groups.splice(1,0,accordionGroupContent);
    }
}
