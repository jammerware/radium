import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RingComponent } from './ring.component';

describe('RingComponent', () => {
  let component: RingComponent;
  let fixture: ComponentFixture<RingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
