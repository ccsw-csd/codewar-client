import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatAutocompleteModule,
    CoreModule
  ]
})
export class UsersModule { }
