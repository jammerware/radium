import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RingItemComponent } from './ring-item.component';

describe('RingItemComponent', () => {
  let component: RingItemComponent;
  let fixture: ComponentFixture<RingItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
