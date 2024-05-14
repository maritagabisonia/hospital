import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors }
  from '@angular/forms';
import { Authentification } from '../../services/Authentification.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user: User = new User();
  validOtp: boolean = false;

  userForm = this.fb.group({
    UserName: ['', this.validateUserName],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    PersonId: ['', Validators.required],
    Password: ['', Validators.required],
    Roles: [['user']]
  });

  verifyForm = this.fb.group({
    verificationCode: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, public Authentification: Authentification) {

  }
  validateUserName(control: AbstractControl): ValidationErrors | null {
    return control.value.length < 5 ? { wrongUserName: { value: control.value } } : null;

  }
  saveUser() {
    this.CheckemailVerificationCode();

    if (this.validOtp == true) {
      if (this.userForm.valid) {
        Object.assign(this.user, this.userForm.value);
        console.log(this.user);
        this.Authentification.addUser(this.user).subscribe({
          next: (response) => {
            console.log('user added successfully', response);
          },
          error: (error) => {
            console.error('Error adding user', error);
          }
        })
      } else {
        console.log('Form is not valid');
      }
    }
    else {
      alert("Please enter a valid OTP");
    }


  }

  sendVerificationCode() {
    const email = this.userForm.value.Email;
    console.log(email)

    if (email == "") {
      alert("please enter the email")
    }
    else {
      if (email != null) {
        this.Authentification.sendVerificationCode(email).subscribe({
          next: (response) => {
            console.log('Verification code sent successfully', response);
          },
          error: (error) => {
            console.error('Error sending verification code', error);
          }
        })
      }
    }

  }

  CheckemailVerificationCode() {
    const email = this.userForm.value.Email;
    const otp = this.verifyForm.value.verificationCode;
    console.log(email, otp)
    if (email != null && otp != null) {
      this.Authentification.CheckemailVerificationCode(email, otp).subscribe({
        next: (response) => {
          console.log('checking verification code successfully', response);
          this.validOtp = true;
          console.log(this.validOtp);
        },
        error: (error) => {
          console.error('Error checking verification code', error);
        }
      })
    }
    else {
      console.log('where is the email?')
    }

  }
}
