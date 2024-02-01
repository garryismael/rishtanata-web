import { FormControl, FormGroup, Validators } from '@angular/forms';

export const signUpForm: FormGroup = new FormGroup({
  full_name: new FormControl<string>('', {
    validators: [Validators.required, Validators.min(2)],
  }),
  gender: new FormControl<'male' | 'female'>('male', {
    validators: [Validators.required],
  }),
  email: new FormControl<string>('', {
    validators: [Validators.required, Validators.email],
  }),
  birthdate: new FormControl<Date>(new Date(), {
    validators: [Validators.required],
  }),
  contact: new FormControl<string>('', {
    validators: [Validators.required],
  }),
});
