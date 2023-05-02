import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PyramidListComponent } from './pyramid-list/pyramid-list.component';
import { PyramidTeamListComponent } from './pyramid-team-list/pyramid-team-list.component';



@NgModule({
  declarations: [
    PyramidListComponent,
    PyramidTeamListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PyramidModule { }
