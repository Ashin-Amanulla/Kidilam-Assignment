import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateFormComponent } from './corporate-form.component';

describe('CorporateFormComponent', () => {
  let component: CorporateFormComponent;
  let fixture: ComponentFixture<CorporateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
