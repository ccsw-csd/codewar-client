import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeListComponent } from './views/challenge-list/challenge-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    ChallengeListComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TagModule,
  ]
})
export class AdminRoleModule { }
