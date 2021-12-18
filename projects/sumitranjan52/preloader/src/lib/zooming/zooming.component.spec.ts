import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomingComponent } from './zooming.component';

describe('ZoomingComponent', () => {
  let component: ZoomingComponent;
  let fixture: ComponentFixture<ZoomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
