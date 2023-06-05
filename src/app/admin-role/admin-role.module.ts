import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';
import { EditorModule } from 'primeng/editor';
import { GeneralComponent } from './views/general/general.component';
import { CodeComponent } from './views/code/code.component';


@NgModule({
  declarations: [
    ChallengeListComponent,
    ChallengeEditComponent,
    GeneralComponent,
    CodeComponent,
    
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TagModule,
    TabViewModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    CheckboxModule,
    DropdownModule,
    ListboxModule,
    TableModule,
    EditorModule
  ]
})
export class AdminRoleModule { }
