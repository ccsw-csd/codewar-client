import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';
import { RefreshTokenResolverService } from './core/services/refresh-token-resolver.service';
import { LayoutComponent } from './core/views/layout/layout.component';
import { LoginComponent } from './login/views/login/login.component';
import { DashboardComponent } from './user-role/views/dashboard/dashboard.component';
import { ChallengeListComponent } from './admin-role/views/challenge-list/challenge-list.component';
import { ChallengeEditComponent } from './admin-role/views/challenge-edit/challenge-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    resolve: {credentials: RefreshTokenResolverService},
    children: [
      { path: 'dashboard', component: DashboardComponent, data:{role:['USER']}},
      { path: 'admin/challenge-list', component: ChallengeListComponent},
      { path: 'challenge-list/:id', component: ChallengeEditComponent},
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },  
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
