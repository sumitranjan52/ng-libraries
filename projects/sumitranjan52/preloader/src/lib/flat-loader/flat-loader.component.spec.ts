import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatLoaderComponent } from './flat-loader.component';

describe('TopLoaderComponent', () => {
  let component: FlatLoaderComponent;
  let fixture: ComponentFixture<FlatLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlatLoaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
