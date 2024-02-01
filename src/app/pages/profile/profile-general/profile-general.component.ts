import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { KnobModule } from 'primeng/knob';
@Component({
  selector: 'app-profile-general',
  standalone: true,
  imports: [KnobModule, FormsModule, NgOptimizedImage, RouterLink],
  templateUrl: './profile-general.component.html',
  styleUrl: './profile-general.component.css'
})
export class ProfileGeneralComponent {
  value = 70;
}
