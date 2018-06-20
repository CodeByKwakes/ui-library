import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionPanelComponent } from './accordion-group/accordion-group.component';
import { CollapseDirective } from '../directives/collapse.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccordionComponent, AccordionPanelComponent, CollapseDirective],
  exports: [AccordionComponent, AccordionPanelComponent]
})
export class AccordionModule { }
