import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf, CommonModule} from "@angular/common";


@Component({
  selector: 'app-password',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    CommonModule
  ],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formsBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formsBuilder.group({
      firstName: [null, [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)]],
      lastName: [null, [Validators.required, Validators.pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.min(8)]]
    })
  }


  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return
    }
    alert("Success")
  }


  get passwordInput(): string {
    return this.registerForm.get('password')?.value || '';
  }

  isSimplePassword(): boolean {
    return /^[a-zA-Z]+$/.test(this.passwordInput) ||
      /^[!@#$%^&*]+$/.test(this.passwordInput) ||
      /^\d+$/.test(this.passwordInput);
  }

  isMediumPassword(): boolean {
    return /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).+$/.test(this.passwordInput) ||
      /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(this.passwordInput) ||
      /^(?=.*\d)(?=.*[!@#$%^&*]).+$/.test(this.passwordInput);
  }

  isStrongPassword(): boolean {
    return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).+$/.test(this.passwordInput);
  }

}
