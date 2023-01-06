import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingHatResultsComponent } from './sorting-hat-results.component';

describe('SortingHatResultsComponent', () => {
  let component: SortingHatResultsComponent;
  let fixture: ComponentFixture<SortingHatResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingHatResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingHatResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
