import { Component, OnInit, Input, HostBinding, Inject, OnDestroy } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-accordion-group, app-accordion-panel',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.scss']
})
export class AccordionPanelComponent implements OnInit, OnDestroy {
  @Input() public heading: string;
  @Input() public panelClass: string;
  @Input() public isDisabled: boolean;

  // Questionable, maybe .panel-open should be on child div.panel element?
  @HostBinding('class.panel-open')
  @Input()
  public get isOpen(): boolean {
    return this._isOpen;
  }

  public set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOtherPanels(this);
    }
  }

  private _isOpen: boolean;
  private accordion: AccordionComponent;

  public constructor(@Inject(AccordionComponent) accordion: AccordionComponent) {
    this.accordion = accordion;
  }

  public ngOnInit(): any {
    this.panelClass = this.panelClass || 'panel-default';
    this.accordion.addGroup(this);
  }

  public ngOnDestroy(): any {
    this.accordion.removeGroup(this);
  }

  public toggleOpen(event: MouseEvent): any {
    event.preventDefault();
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }

}
