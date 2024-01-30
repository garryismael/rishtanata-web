import { AccountService } from '@/app/services/account.service';
import { confirmPasswordValidator } from '@/app/utils/form';
import { Component, Input, afterNextRender, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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
  private router: Router = inject(Router);
  private accountService: AccountService = inject(AccountService);

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

  submit() {
    if (this.formGroup.valid) {
      this.accountService
        .createAccount({
          token: this.token,
          password: this.formGroup.controls['password'].value as string,
          confirm_password: this.formGroup.controls['confirm_password']
            .value as string,
        })
        .subscribe((_account) => {
          console.log(_account);
          this.router.navigateByUrl('/auth/sign-in');
        });
    } else {
      console.log('Invalid Data');
    }
  }
}
