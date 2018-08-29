import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthenticatedUserGuard } from '../service/authenticated-user.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [AuthenticatedUserGuard], children: [
    { path: '', redirectTo: 'list-user', pathMatch: 'full' },
    { path: 'create-user', component: CreateUserComponent },
    { path: 'list-user', component: ListUserComponent },
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AdminComponent,
    CreateUserComponent,
    ListUserComponent
  ],
  providers: [AuthenticatedUserGuard]
})
export class AdminModule { }
