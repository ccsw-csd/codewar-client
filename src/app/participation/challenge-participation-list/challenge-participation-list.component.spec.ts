import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeParticipationListComponent } from './challenge-participation-list.component';

describe('ChallengeParticipationListComponent', () => {
  let component: ChallengeParticipationListComponent;
  let fixture: ComponentFixture<ChallengeParticipationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeParticipationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeParticipationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
