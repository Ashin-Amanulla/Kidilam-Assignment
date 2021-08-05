import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochureFormComponent } from './brochure-form.component';

describe('BrochureFormComponent', () => {
  let component: BrochureFormComponent;
  let fixture: ComponentFixture<BrochureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrochureFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrochureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
