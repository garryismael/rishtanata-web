import { FormControl, FormGroup, Validators } from '@angular/forms';

export const signUpForm: FormGroup = new FormGroup({
  full_name: new FormControl('', {
    validators: [Validators.required, Validators.min(2)],
  }),
  gender: new FormControl('', {
    validators: [Validators.required],
  }),
  email: new FormControl('', {
    validators: [Validators.required, Validators.email],
  }),
  birthdate: new FormControl('', {
    validators: [Validators.required],
  }),
  contact: new FormControl('', {
    validators: [Validators.required],
  }),
});
