import { FormControl, FormGroup, Validators } from '@angular/forms';

export const signInForm: FormGroup = new FormGroup({
  email: new FormControl('', {
    validators: [Validators.required, Validators.email],
  }),
  password: new FormControl('', {
    validators: [Validators.required, Validators.min(5)],
  }),
});
