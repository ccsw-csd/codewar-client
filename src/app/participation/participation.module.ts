import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeParticipationListComponent } from './challenge-participation-list/challenge-participation-list.component';
import { ChallengeParticipationItemListComponent } from './challenge-participation-list/challenge-participation-item-list/challenge-participation-item-list.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ChallengeParticipationListComponent,
    ChallengeParticipationItemListComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class ParticipationModule { }
