import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Category } from '@cxcloud/ct-types/categories';
import { PaginatedProductResult, Product } from '@cxcloud/ct-types/products';
import { Cart } from '@cxcloud/ct-types/carts';

@Injectable()
export class CommerceService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/categories');
  }

  getProducts(categoryId: string): Observable<PaginatedProductResult> {
    return this.http.get<PaginatedProductResult>(
      `/products/byCategory/${categoryId}`
    );
  }

  getProduct(productId: string): Observable<Product> {
    return this.http.get<Product>(`/products/${productId}`);
  }

  getCart(cartId: string): Observable<Cart> {
    return this.http.get<Cart>(`/carts/${cartId}`);
  }
}
