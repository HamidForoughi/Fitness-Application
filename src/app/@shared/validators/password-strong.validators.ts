import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function PasswordStrongValidators(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        // const hasUpperCase = /[A-Z]+/.test(value);

        const hasLowerCase = /[a-z]+/.test(value);

        const hasNumeric = /[0-9]+/.test(value);

        const NotHasSpace = /^\S*$/u.test(value);

        // const hasSymbol = /[!@#$%^&*()_+.]+/.test(value);

        const passwordValid =
                  // hasUpperCase &&
                  hasLowerCase &&
                  hasNumeric &&
                  // hasSymbol &&
                  NotHasSpace;

        return !passwordValid ? {strong: true} : null;
    };
}