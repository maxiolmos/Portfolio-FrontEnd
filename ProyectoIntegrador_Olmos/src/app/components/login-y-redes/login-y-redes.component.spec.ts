import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginYRedesComponent } from './login-y-redes.component';

describe('LoginYRedesComponent', () => {
  let component: LoginYRedesComponent;
  let fixture: ComponentFixture<LoginYRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginYRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginYRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
