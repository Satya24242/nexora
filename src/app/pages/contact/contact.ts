import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface ContactChannel {
  icon: string;
  title: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = new FormBuilder();

  protected readonly submitted = signal(false);

  protected readonly serviceOptions = [
    'Managed IT Support',
    'Cloud Solutions',
    'Cybersecurity',
    'Custom Software Development',
    'Network & Infrastructure',
    'IT Strategy & Consulting',
    'Not sure yet',
  ];

  protected readonly channels: ContactChannel[] = [
    { icon: 'mail', title: 'Email Us', value: 'hello@nexorait.com', href: 'mailto:hello@nexorait.com' },
    { icon: 'call', title: 'Call Us', value: '+1 (800) 555-1234', href: 'tel:+18005551234' },
    { icon: 'place', title: 'Visit Us', value: '500 Market Street, Suite 300, San Francisco, CA', href: '#' },
  ];

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    service: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted.set(true);
    this.form.reset();
  }
}
