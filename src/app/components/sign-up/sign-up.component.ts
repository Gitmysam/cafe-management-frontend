import { SignUp, Login } from './../../model/model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpDetails: SignUp = {
    name: '',
    email: '',
    role: '',
    contactNumber: null,
    status: false,
    password: '',
  };

  //for login process
  loginDetails: Login = {
    email: '',
    password: '',
  };
  localStorageData: string | null = '';
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {}
  onClick() {
    this.api.userSignUp(this.signUpDetails).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.router.navigate(['/home']);
      },
    });
  }

  onClickLogin() {
    this.api.userLogIn(this.loginDetails).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res));
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.localStorageData = localStorage.getItem('token');
        console.log(this.localStorageData);
      },
    });
  }
}
