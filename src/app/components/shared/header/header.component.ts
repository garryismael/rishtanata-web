import { AuthService } from '@/app/services/auth.service';
import { NgOptimizedImage } from '@angular/common';
import { Component, afterNextRender, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  authService: AuthService = inject(AuthService);
  authenticated = false;

  constructor() {
    afterNextRender(() => {
      this.authenticated = this.authService.isAuthenticated();
    })
  }
}
