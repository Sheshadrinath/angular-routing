import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { LoginComponent } from './account/login/login.component';
import { ResetPasswordComponent } from './account/reset-password/reset-password.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { AuthenticatedUserGuard } from './service/authenticated-user.guard';
import { AllowResetPasswordGuard } from './service/allow-reset-password.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent, canDeactivate: [AllowResetPasswordGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthenticatedUserGuard], children: [
    { path: '', redirectTo: 'list-user', pathMatch: 'full' },
    { path: 'create-user', component: CreateUserComponent },
    { path: 'list-user', component: ListUserComponent },
  ]},
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ListUserComponent,
    LoginComponent,
    ResetPasswordComponent,
    NotFoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticatedUserGuard, AllowResetPasswordGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
