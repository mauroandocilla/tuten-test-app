import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {LoginPage} from './login.page';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Login Component properties', () => {
    it('Should have an initial submitted property with false value', () => {
      expect(component.submitted).toEqual(false);
    });

    it('Should have an undefined error property before initialization', () => {
      expect(component.error).toBeUndefined()
    });
  });

  it('Should create a form with 3 controls', () => {
    expect(component.loginForm.contains('user')).toBeTruthy();
    expect(component.loginForm.contains('pass')).toBeTruthy();
    expect(component.loginForm.contains('app')).toBeTruthy();
  });

  it('Should have an invalid form after initialization', () => {
    component.ngOnInit();
    const loginForm: FormGroup = component.loginForm;
    expect(component.submitted).toEqual(false);
    expect(loginForm.status).toEqual('INVALID');
  });
});
