import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousExperienceComponent } from './previous-experience.component';

describe('PreviousExperienceComponent', () => {
  let component: PreviousExperienceComponent;
  let fixture: ComponentFixture<PreviousExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
