import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGralComponent } from './info-gral.component';

describe('InfoGralComponent', () => {
  let component: InfoGralComponent;
  let fixture: ComponentFixture<InfoGralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoGralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
