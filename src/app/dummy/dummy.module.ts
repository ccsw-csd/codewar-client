import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeParticipationComponent } from './challenge-participation/challenge-participation.component';
import { CoreModule } from '../core/core.module';
import { NgxEditorModule } from 'ngx-editor';



@NgModule({
  declarations: [
    ChallengeParticipationComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgxEditorModule,
  ]
})
export class DummyModule { }
