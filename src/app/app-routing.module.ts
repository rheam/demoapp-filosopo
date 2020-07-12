import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './modules/home/pages/users/users.component';
/* import { DashboardComponent }   from './modules/home/components/dashboard/dashboard.component'; */
import { UserDetailComponent }  from './modules/home/components/user-detail/user-detail.component';
import { NotFoundComponent }  from './modules/home/pages/404/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
 /*  { path: 'dashboard', component: DashboardComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
