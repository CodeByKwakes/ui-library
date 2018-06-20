import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionPanelComponent } from './accordion-group/accordion-group.component';
import { CollapseModule } from '../../directives/collapse/collapse.module';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule
  ],
  declarations: [AccordionComponent, AccordionPanelComponent],
  exports: [AccordionComponent, AccordionPanelComponent]
})
export class AccordionModule { }
