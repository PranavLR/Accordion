import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTabComponent } from './accordion-tab.component';

describe('AccordionTabComponent', () => {
  let component: AccordionTabComponent;
  let fixture: ComponentFixture<AccordionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
