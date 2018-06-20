import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from './accordion/accordion.module';
import { CollapseDirective } from './directives/collapse.directive';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule
  ],
  declarations: [],
  exports: [
    AccordionModule
  ]
})
export class UiComponentLibModule { }
