import { UserProfileComponent } from '@/app/components/user-profile/user-profile.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [UserProfileComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {}
