import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadingTextBoxComponent } from './fading-text-box.component';

describe('FadingTextBoxComponent', () => {
  let component: FadingTextBoxComponent;
  let fixture: ComponentFixture<FadingTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FadingTextBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FadingTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
