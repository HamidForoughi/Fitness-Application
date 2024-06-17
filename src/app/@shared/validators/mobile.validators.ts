import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function MobileValidators(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const REGEX = new RegExp(/^(09\d{9})$/);
        const value = control.value;

        if (!value || !value.length) {
            return null;
        }

        return !REGEX.test(value) ? {mobile_invalid: true} : null;
    };
}