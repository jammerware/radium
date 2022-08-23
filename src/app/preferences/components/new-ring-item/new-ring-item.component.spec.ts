import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewRingItemComponent } from './new-ring-item.component';

describe('NewRingItemComponent', () => {
  let component: NewRingItemComponent;
  let fixture: ComponentFixture<NewRingItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
