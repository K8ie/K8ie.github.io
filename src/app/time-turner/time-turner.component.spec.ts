import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTurnerComponent } from './time-turner.component';

describe('TimeTurnerComponent', () => {
  let component: TimeTurnerComponent;
  let fixture: ComponentFixture<TimeTurnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTurnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTurnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
