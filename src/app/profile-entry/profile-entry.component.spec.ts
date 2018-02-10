import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile } from './profile-entry.component';

describe('Profile', () => {
  let component: Profile;
  let fixture: ComponentFixture<Profile>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
