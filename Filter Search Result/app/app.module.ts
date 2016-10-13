import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {Accordion} from './accordion';
import {AccordionGroup} from './accordion-group';

import { HttpModule, Http } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule
            

   ],
  declarations: [ AppComponent,Accordion,AccordionGroup],
  exports: [
        AppComponent,Accordion,AccordionGroup
    ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }