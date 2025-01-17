import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewRingDialogComponent } from './new-ring-dialog.component';

describe('NewRingDialogComponent', () => {
  let component: NewRingDialogComponent;
  let fixture: ComponentFixture<NewRingDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
