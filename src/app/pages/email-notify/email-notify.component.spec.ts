import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailNotifyComponent } from './email-notify.component';

describe('EmailNotifyComponent', () => {
  let component: EmailNotifyComponent;
  let fixture: ComponentFixture<EmailNotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailNotifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
