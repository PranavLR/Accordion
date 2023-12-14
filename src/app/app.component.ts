import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AccordionComponent } from "./acordion/accordion/accordion.component";
import { Observable, of } from 'rxjs';
import { AccordionI } from './acordion/types/accordion';
import { AccordionTabComponent } from "./acordion/accordion-tab/accordion-tab.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, AccordionComponent, AccordionTabComponent]
})
export class AppComponent {
  title = 'Accordion';

  // isSelected: boolean = false

  data$: Observable<AccordionI[]> = of([
    {header: "Header 1", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed expedita aspernatur harum iste, ipsa quos nostrum, similique quisquam illo aperiam ullam blanditiis incidunt consectetur iure non reprehenderit! Vitae, explicabo!"},
    {header: "Header 2", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed expedita aspernatur harum iste, ipsa quos nostrum, similique quisquam illo aperiam ullam blanditiis incidunt consectetur iure non reprehenderit! Vitae, explicabo!"},
    {header: "Header 3", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed expedita aspernatur harum iste, ipsa quos nostrum, similique quisquam illo aperiam ullam blanditiis incidunt consectetur iure non reprehenderit! Vitae, explicabo!"},
    // {header: "Header 4", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed expedita aspernatur harum iste, ipsa quos nostrum, similique quisquam illo aperiam ullam blanditiis incidunt consectetur iure non reprehenderit! Vitae, explicabo!"},
    // {header: "Header 5", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sed expedita aspernatur harum iste, ipsa quos nostrum, similique quisquam illo aperiam ullam blanditiis incidunt consectetur iure non reprehenderit! Vitae, explicabo!"},
  ]);

}
