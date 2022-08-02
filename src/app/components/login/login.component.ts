import { Login } from './../../model/model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //for login process
  loginDetails: Login = {
    email: '',
    password: '',
  };
  localStorageParseData: any;
  constructor(private router: Router, private api: ApiService) {}

  ngOnInit(): void {}
  onClickLogin() {
    this.api.userLogIn(this.loginDetails).subscribe({
      next: (res) => {
        localStorage.setItem('cafeToken', JSON.stringify(res));
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        let localStorageData: any = localStorage.getItem('cafeToken');
        this.localStorageParseData = JSON.parse(localStorageData);
        if (this.localStorageParseData.token) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/sign-up']);
        }
      },
    });
  }
  openModal() {
    this.router.navigate(['/sign-up']);
  }
}
