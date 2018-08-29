import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ResetPasswordComponent } from '../account/reset-password/reset-password.component';

@Injectable({
  providedIn: 'root'
})
export class AllowResetPasswordGuard implements CanDeactivate<ResetPasswordComponent> {
  canDeactivate(
    component: ResetPasswordComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.saved();
  }
}
