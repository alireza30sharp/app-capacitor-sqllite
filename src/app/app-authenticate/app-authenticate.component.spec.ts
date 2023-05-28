import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAuthenticateComponent } from './app-authenticate.component';

describe('AppAuthenticateComponent', () => {
  let component: AppAuthenticateComponent;
  let fixture: ComponentFixture<AppAuthenticateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAuthenticateComponent]
    });
    fixture = TestBed.createComponent(AppAuthenticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
