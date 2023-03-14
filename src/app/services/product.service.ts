import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: "root"
})
export class ProductService {

  baseUrl = '/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProduct(id: number): Observable<Product | null> {
    return this.http.get<Product | null>(`${this.baseUrl}/${id}`);
  }

  searchProducts(term: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}?name=${term}`);
  }
}
