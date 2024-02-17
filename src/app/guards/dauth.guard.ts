import { inject } from '@angular/core';
import { CanDeactivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const dauthGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const authService = inject(AuthService);
  if(confirm('Are you want logout?')) {
    authService.logout();
    return true;
  }
  return false;
};
