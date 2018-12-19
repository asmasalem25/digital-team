import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProtofolioComponent } from './our-protofolio.component';

describe('OurProtofolioComponent', () => {
  let component: OurProtofolioComponent;
  let fixture: ComponentFixture<OurProtofolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProtofolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProtofolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
