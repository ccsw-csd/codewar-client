import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ChallengeItemListComponent } from './challenge-list/challenge-item-list/challenge-item-list.component';
import { ChallengeEditGeneralComponent } from './challenge-edit/challenge-edit-general/challenge-edit-general.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import { NgxEditorModule } from 'ngx-editor';
import { ChallengeEditCodeComponent } from './challenge-edit/challenge-edit-code/challenge-edit-code.component';

@NgModule({
  declarations: [ChallengeEditComponent, ChallengeListComponent, ChallengeItemListComponent, ChallengeEditGeneralComponent, ChallengeEditCodeComponent],
  imports: [
    CommonModule,
    CoreModule,
    MatPaginatorModule,
    MatTabsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatSelectModule,
    NgxEditorModule,
  ]
})
export class ChallengeModule { }
