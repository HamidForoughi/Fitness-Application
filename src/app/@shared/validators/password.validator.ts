import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  const passwordRe = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = passwordRe.test(control.value);
    return valid ? null : {'invalidPassword': true};
  };
}
