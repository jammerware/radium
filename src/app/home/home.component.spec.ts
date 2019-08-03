import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';
import { TranslateModule } from '@ngx-translate/core';

describe('WelcomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
<<<<<<< HEAD:src/app/welcome/welcome.component.spec.ts
      imports: [
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
=======
      imports: [TranslateModule.forRoot()]
    }).compileComponents();
>>>>>>> f986a0acbe237fb720134813ca4e4942bcfcb17c:src/app/home/home.component.spec.ts
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'PAGES.HOME.TITLE'
    );
  }));
});
