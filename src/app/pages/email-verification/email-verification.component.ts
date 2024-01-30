import { confirmPasswordValidator } from '@/app/utils/form';
import { Component, Input, afterNextRender, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.css',
})
export class EmailVerificationComponent {
  @Input('token') token = '';
  private route = inject(ActivatedRoute);

  formGroup: FormGroup = new FormGroup({
    password: new FormControl<string>('', {
      validators: [Validators.required, Validators.min(5)],
    }),
    confirm_password: new FormControl<string>('', {
      validators: [
        Validators.required,
        Validators.min(5),
        confirmPasswordValidator,
      ],
    }),
  });

  constructor() {
    afterNextRender(() => {
      console.log('Token: ' + this.token);
    });
  }

  submit() {
    console.log(this.formGroup.value.password);
  }
}
