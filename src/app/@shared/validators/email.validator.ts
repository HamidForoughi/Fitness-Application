import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function emailValidator(): ValidatorFn {
  const emailRe = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = emailRe.test(control.value);
    return valid ? null : {'invalidEmail': true};
  };
}
