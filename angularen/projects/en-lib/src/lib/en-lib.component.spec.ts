import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnLibComponent } from './en-lib.component';

describe('EnLibComponent', () => {
  let component: EnLibComponent;
  let fixture: ComponentFixture<EnLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
