import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
             selector: 'app-login',
             templateUrl: './login.component.html',
             styleUrl: './login.component.css',
           })
export class LoginComponent
  implements OnInit {

  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
                                     'email': new FormControl('', [Validators.required, Validators.email]),
                                     'password': new FormControl(
                                       '',
                                       [
                                         Validators.required,
                                         Validators.pattern(
                                           /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
                                       ],
                                     ),
                                   },
    );
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['admin'])
    }
  }

  submitLogin() {
    this.authService.login(
      {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }).subscribe(
      {
        next: () => alert(
          'email: ' + this.loginForm.value.email + ';\npassword: ' + this.loginForm.value.password + ';'),
        error: (err) => alert(err.message)
      },
    );
  }

  isValid(fieldName: string) {
    return this.loginForm.get(fieldName)?.invalid;
  }

  isTouched(fieldName: string) {
    return this.loginForm.get(fieldName)?.touched;
  }
}
