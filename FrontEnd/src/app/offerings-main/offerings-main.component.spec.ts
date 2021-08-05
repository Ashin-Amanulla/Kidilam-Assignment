import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingsMainComponent } from './offerings-main.component';

describe('OfferingsMainComponent', () => {
  let component: OfferingsMainComponent;
  let fixture: ComponentFixture<OfferingsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferingsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
