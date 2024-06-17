import { ResolveFn } from '@angular/router';

export const queryParameterResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
