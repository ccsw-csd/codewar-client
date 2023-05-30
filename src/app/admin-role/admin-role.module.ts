import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeListComponent } from './views/challenge-list/challenge-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ChallengeEditComponent } from './views/challenge-edit/challenge-edit.component';

@NgModule({
  declarations: [
    ChallengeListComponent,
    ChallengeEditComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TagModule,
    TabViewModule,
    FormsModule,
    InputTextModule,
  ]
})
export class AdminRoleModule { }
