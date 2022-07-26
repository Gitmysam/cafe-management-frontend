import { product, SignUp, Login } from './model/model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  userSignUp(signupDetails: {}): Observable<SignUp> {
    return this.http.post<SignUp>(
      'http://localhost:8000/user/signup',
      signupDetails
    );
  }

  //for log in routes
  userLogIn(loginDetails: {}): Observable<Login> {
    return this.http.post<Login>(
      'http://localhost:8000/user/login',
      loginDetails
    );
  }
}
