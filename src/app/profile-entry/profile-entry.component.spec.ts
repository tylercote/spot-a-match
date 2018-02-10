import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEntryComponent } from './profile-entry.component';

describe('Profile', () => {
  let component: ProfileEntryComponent;
  let fixture: ComponentFixture<ProfileEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
