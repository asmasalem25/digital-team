import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAgencyComponent } from './our-agency.component';

describe('OurAgencyComponent', () => {
  let component: OurAgencyComponent;
  let fixture: ComponentFixture<OurAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
