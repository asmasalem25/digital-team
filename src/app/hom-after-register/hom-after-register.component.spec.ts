import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomAfterRegisterComponent } from './hom-after-register.component';

describe('HomAfterRegisterComponent', () => {
  let component: HomAfterRegisterComponent;
  let fixture: ComponentFixture<HomAfterRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomAfterRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomAfterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
