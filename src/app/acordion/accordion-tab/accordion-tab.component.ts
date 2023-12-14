import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-tab',
  standalone: true,
  imports: [],
  templateUrl: './accordion-tab.component.html',
  styleUrl: './accordion-tab.component.scss',
  animations: [
    trigger('accordion', [
      state('true', style({ height: AUTO_STYLE, visibility: AUTO_STYLE, overflow: AUTO_STYLE })),
      state('false', style({ height: '0', visibility: 'hidden', overflow: 'hidden' })),
      transition('false <=> true', animate(300 + 'ms ease-in')),
      // transition('true => false', animate(300 + 'ms ease-out'))
    ])
  ]
})
export class AccordionTabComponent {

  @Input() header: string = "";
  @Input() currentIndex: number = 0;
  // @Output() isSelectedEmitter = new EventEmitter();
  // @Input() icon: boolean = true;
  // @ViewChild('AccordionContent') accordionContent!: HTMLDivElement; 
  
  isSelected: boolean = false;

  toggle() {
    this.isSelected = !this.isSelected
  }

}
