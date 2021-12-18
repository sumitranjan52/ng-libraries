import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticirleComponent } from './multicirle.component';

describe('MulticirleComponent', () => {
  let component: MulticirleComponent;
  let fixture: ComponentFixture<MulticirleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticirleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticirleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
