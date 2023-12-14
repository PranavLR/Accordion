import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-accordion',
    standalone: true,
    templateUrl: './accordion.component.html',
    styleUrl: './accordion.component.scss',
    imports: [NgTemplateOutlet]
    
})
export class AccordionComponent {
    // @Input() headerIcon: boolean = true;
    // @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;

}
