import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { AccordionPanelComponent } from '../accordion-group/accordion-group.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() closeOthers: boolean;

  @HostBinding('class.panel-group')
  addClass = true;

  private groups: AccordionPanelComponent[] = [];

  closeOtherPanels(openGroup: AccordionPanelComponent): void {
    if (!this.closeOthers) {
      return;
    }

    this.groups.forEach((group: AccordionPanelComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  addGroup(group: AccordionPanelComponent): void {
    this.groups.push(group);
  }

  removeGroup(group: AccordionPanelComponent): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }

}
