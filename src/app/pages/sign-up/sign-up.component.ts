import { UserService } from '@/app/services/user.service';
import { signUpForm } from '@/constants/sign-up';
import { User } from '@/models/user';
import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [NgOptimizedImage, RouterModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  private router: Router = inject(Router);
  private userService: UserService = inject(UserService);
  signUpForm: FormGroup = signUpForm;

  submit(): void {
    if (this.signUpForm.valid) {
      this.userService
        .createUserAccount({
          full_name: this.signUpForm.controls['full_name'].value as string,
          gender: this.signUpForm.controls['gender'].value as string,
          email: this.signUpForm.controls['email'].value as string,
          birthdate: this.signUpForm.controls['birthdate'].value as string,
          contact: this.signUpForm.controls['contact'].value as string,
        })
        .subscribe((_user: User) => {
          console.log(_user);
          this.router.navigateByUrl('/email-notify');
        });
    } else {
      console.log('Logged Out');
    }
  }
}
