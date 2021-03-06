import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeEditComponent } from './challenge/challenge-edit/challenge-edit.component';
import { ChallengeListComponent } from './challenge/challenge-list/challenge-list.component';
import { LayoutComponent } from './core/layout/layout.component';
import { AuthGuard } from './core/services/auth.guard';
import { UserResolverService } from './core/services/user-resolver.service';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ChallengeParticipationComponent } from './participation/challenge-participation/challenge-participation.component';
import { LoginComponent } from './login/login/login.component';
import { ChallengeParticipationListComponent } from './participation/challenge-participation-list/challenge-participation-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    resolve: {user: UserResolverService},
    children: [
      { path: 'dashboard', component: DashboardComponent,},
      { path: 'challenge-list', component: ChallengeListComponent,},  
      { path: 'challenge-edit/:id', component: ChallengeEditComponent,},
      { path: 'challenge-edit', component: ChallengeEditComponent,},
      { path: 'user-list', component: UsersListComponent},
      { path: 'challenge-participation-list', component: ChallengeParticipationListComponent},
      { path: 'challenge-participation/:id', component: ChallengeParticipationComponent,},
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false,
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
