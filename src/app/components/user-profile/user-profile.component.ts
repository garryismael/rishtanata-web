import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NgOptimizedImage, MatProgressSpinnerModule, MatTabsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {}
