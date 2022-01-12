import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeParticipationListComponent } from './challenge-participation-list/challenge-participation-list.component';
import { ChallengeParticipationItemListComponent } from './challenge-participation-list/challenge-participation-item-list/challenge-participation-item-list.component';
import { CoreModule } from '../core/core.module';
import { NgxEditorModule } from 'ngx-editor';
import { ChallengeParticipationComponent } from './challenge-participation/challenge-participation.component';
import { ChallengeInfoComponent } from './challenge-participation-list/challenge-info/challenge-info.component';


@NgModule({
  declarations: [
    ChallengeParticipationListComponent,
    ChallengeParticipationItemListComponent,
    ChallengeParticipationComponent,
    ChallengeInfoComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgxEditorModule,
  ]
})
export class ParticipationModule { }
