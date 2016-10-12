import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Angular2Accordion }   from './accordion-example';
import {Accordion, AccordionGroup} from './accordion';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ Angular2Accordion,Accordion, AccordionGroup ],
  bootstrap:    [ Angular2Accordion ]
})
export class AppModule { }
