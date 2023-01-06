import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinningTextComponent } from './spinning-text.component';

describe('SpinningTextComponent', () => {
  let component: SpinningTextComponent;
  let fixture: ComponentFixture<SpinningTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinningTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinningTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
