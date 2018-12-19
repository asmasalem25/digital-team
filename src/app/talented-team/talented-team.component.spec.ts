import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentedTeamComponent } from './talented-team.component';

describe('TalentedTeamComponent', () => {
  let component: TalentedTeamComponent;
  let fixture: ComponentFixture<TalentedTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentedTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentedTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
