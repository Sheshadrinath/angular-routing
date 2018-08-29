import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { ResetPasswordComponent } from './account/reset-password/reset-password.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthenticatedUserGuard } from './service/authenticated-user.guard';
import { AllowResetPasswordGuard } from './service/allow-reset-password.guard';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent, canDeactivate: [AllowResetPasswordGuard] },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticatedUserGuard, AllowResetPasswordGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
