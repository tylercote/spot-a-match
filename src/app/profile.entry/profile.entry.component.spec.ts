import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile.EntryComponent } from './profile.entry.component';

describe('Profile.EntryComponent', () => {
  let component: Profile.EntryComponent;
  let fixture: ComponentFixture<Profile.EntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile.EntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile.EntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
