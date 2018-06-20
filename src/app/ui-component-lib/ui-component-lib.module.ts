import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from './components/accordion/accordion.module';

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
