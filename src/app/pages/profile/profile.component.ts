import { Component, afterNextRender, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [CookieService],
})
export class ProfileComponent {
  private cookieService: CookieService = inject(CookieService);
  constructor() {
    afterNextRender(() => {
      console.log(this.cookieService.get('token'));
    });
  }
}
