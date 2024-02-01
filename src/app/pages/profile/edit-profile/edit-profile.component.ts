import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
})
export class EditProfileComponent {
  formGroup: FormGroup = new FormGroup({
    full_name: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    gender: new FormControl<'male' | 'female'>('male', {
      validators: [Validators.required],
    }),
    birthdate: new FormControl<Date | undefined>(new Date(), {
      validators: [Validators.required],
    }),
    birth_country: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    address: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    email: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    phone: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    nationality: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    ethnic_group: new FormControl<string>('', {
      validators: [Validators.required],
    }),
    marital_status: new FormControl<string>('', {
      validators: [Validators.required]
    })
  });
}
