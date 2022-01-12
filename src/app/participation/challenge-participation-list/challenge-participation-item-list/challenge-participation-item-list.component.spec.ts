import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeParticipationItemListComponent } from './challenge-participation-item-list.component';

describe('ChallengeParticipationItemListComponent', () => {
  let component: ChallengeParticipationItemListComponent;
  let fixture: ComponentFixture<ChallengeParticipationItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeParticipationItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeParticipationItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
