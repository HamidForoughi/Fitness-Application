import { CanActivateFn } from '@angular/router';

export const IsGuestGuard: CanActivateFn = (route, state) => {
  return true;
};
