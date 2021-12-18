import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ben10Component } from './ben10.component';

describe('Ben10Component', () => {
  let component: Ben10Component;
  let fixture: ComponentFixture<Ben10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ben10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ben10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
