import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGeneralComponent } from './profile-general.component';

describe('ProfileGeneralComponent', () => {
  let component: ProfileGeneralComponent;
  let fixture: ComponentFixture<ProfileGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
