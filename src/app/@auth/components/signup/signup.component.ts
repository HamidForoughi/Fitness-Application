import {Component} from '@angular/core';
import {AuthService} from "../../auth.service";
import {AbstractControl, FormGroup, ReactiveFormsModule, UntypedFormBuilder, Validators} from "@angular/forms";
import {emailValidator} from "../../../@shared/validators/email.validator";
import {JsonPipe, NgClass, NgIf} from "@angular/common";
import {passwordValidator} from "../../../@shared/validators/password.validator";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgClass,
    JsonPipe
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  protected signupForm: FormGroup
  protected submittedForm: boolean = false

  constructor(
    private authSV: AuthService,
    private fb: UntypedFormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, passwordValidator()]]
    })
  }

  get f(): { [key: string]: AbstractControl; } {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submittedForm = true;
    if (this.signupForm.valid) {
      this.authSV.registerUser({
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      });
      console.log(this.signupForm);
    } else {
      console.log("Form is invalid");
    }
  }
}
