import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function PhoneNumberValidators(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const REGEX = new RegExp(/^0[0-9]{2,}[0-9]{7,}$/);
        const value = control.value;

        if (!value || !value.length) {
            return null;
        }

        return !REGEX.test(value) ? {phone_number_invalid: true} : null;
    };
}