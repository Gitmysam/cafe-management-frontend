import { SignUp } from './../../model/model';
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
}
