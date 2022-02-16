import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelRestrictionComponent } from './travel-restriction.component';

describe('TravelRestrictionComponent', () => {
  let component: TravelRestrictionComponent;
  let fixture: ComponentFixture<TravelRestrictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelRestrictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelRestrictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
