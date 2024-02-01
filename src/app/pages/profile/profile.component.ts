import { UserProfileComponent } from '@/app/components/user-profile/user-profile.component';
import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { KnobModule } from 'primeng/knob';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    UserProfileComponent,
    MenuModule,
    RouterOutlet,
    KnobModule,
    FormsModule,
    NgOptimizedImage,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  value = 70;
  menus: MenuItem[] = [
    {
      label: 'Options',
      items: [
        {
          label: 'Update',
          icon: 'pi pi-refresh',
        },
        {
          label: 'Photo',
          icon: 'pi pi-camera',
        },
      ],
    },
    {
      label: 'Navigate',
      items: [
        {
          label: 'Jamaat',
          icon: 'pi pi-external-link',
          routerLink: 'http://angular.io',
        },
        {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload',
        },
      ],
    },
  ];
}
