import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAboutComponent } from './list-about.component';

describe('ListAboutComponent', () => {
  let component: ListAboutComponent;
  let fixture: ComponentFixture<ListAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
