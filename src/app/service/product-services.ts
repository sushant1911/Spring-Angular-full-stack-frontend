import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Product } from './../common/product';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  private apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    
    return this.http.get<Product[]>(this.apiUrl).pipe(map((response: any) => response._embedded.products));
  }
}
