import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  usernameError: string;

  constructor(private authService: AuthService, private router: Router) {
    this._createForm();
  }

  ngOnInit(): void {

  }

  _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required
      ]),
      confirmPassword: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required
      ])
    })
  }

  register(): void {
    const rawValue = this.form.getRawValue();
    delete rawValue.confirmPassword;
    this.authService.register(rawValue).subscribe({
      next: () => this.router.navigate(['login']),
      error: e => this.usernameError = e.error.username[0]
    });
  }

  // _checkPasswords(form: Abs): void {
  //
  // }
}
