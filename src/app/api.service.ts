import { Product, SignUp, Login } from './model/model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  localStorageData: any = localStorage.getItem('cafeToken');
  localStorageParseData: any = JSON.parse(this.localStorageData);
  private config = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.localStorageParseData.token}`,
    }),
  };
  constructor(private http: HttpClient) {}
  userSignUp(signupDetails: {}): Observable<SignUp> {
    return this.http.post<SignUp>(
      'http://localhost:8000/user/signup',
      signupDetails
    );
  }

  //for login api
  userLogIn(loginDetails: {}): Observable<Login> {
    return this.http.post<Login>(
      'http://localhost:8000/user/login',
      loginDetails
    );
  }

  //for product api
  getProductDetails(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/user/product/all', {
      headers: this.config.headers,
    });
  }
  deleteProductDetails(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:8000/user/product/${id}`, {
      headers: this.config.headers,
    });
  }
  createProduct(productCreate: {}): Observable<Product> {
    return this.http.post<Product>(
      'http://localhost:8000/user/product/create',
      productCreate,
      { headers: this.config.headers }
    );
  }
}
