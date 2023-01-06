import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverSectionComponent } from './cover-section.component';

describe('CoverSectionComponent', () => {
  let component: CoverSectionComponent;
  let fixture: ComponentFixture<CoverSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
