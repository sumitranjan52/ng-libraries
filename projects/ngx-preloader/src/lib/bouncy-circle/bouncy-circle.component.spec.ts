import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncyCircleComponent } from './bouncy-circle.component';

describe('BouncyCircleComponent', () => {
  let component: BouncyCircleComponent;
  let fixture: ComponentFixture<BouncyCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BouncyCircleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouncyCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
