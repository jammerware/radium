import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RingItemComponent } from './ring-item.component';

describe('RingItemComponent', () => {
  let component: RingItemComponent;
  let fixture: ComponentFixture<RingItemComponent>;

  beforeEach(async(() => {
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
