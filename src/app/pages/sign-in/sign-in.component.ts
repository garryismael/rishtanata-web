import { AuthService } from '@/app/services/auth.service';
import { signInForm } from '@/constants/sign-in';
import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, ReactiveFormsModule, InputTextModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  providers: [CookieService]
})
export class SignInComponent {
  private router: Router = inject(Router);
  private authService: AuthService = inject(AuthService);
  private cookieService: CookieService = inject(CookieService);
  signInForm = signInForm;

  login(): void {
    if (this.signInForm.valid) {
      this.authService
        .login({
          email: this.signInForm.controls['email'].value as string,
          password: this.signInForm.controls['password'].value as string
        })
        .subscribe((_token) => {
          this.cookieService.set("token", _token.access_token);
          this.router.navigateByUrl('/profile');
        });
    } else {
      console.log('Invalid Login');
    }
  }
}
