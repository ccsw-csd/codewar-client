import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengeEditComponent } from './challenge/challenge-edit/challenge-edit.component';
import { ChallengeListComponent } from './challenge/challenge-list/challenge-list.component';
import { LayoutComponent } from './core/layout/layout.component';
import { AuthGuard } from './core/services/auth.guard';
import { UserResolverService } from './core/services/user-resolver.service';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';

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
