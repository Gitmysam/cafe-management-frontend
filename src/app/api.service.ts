import { product } from './model/model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getdata(): Observable<product> {
    return this.http.get<product>('http://localhost:8000/user//product/all');
  }
}
