import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { OAuthToken, Customer } from '@cxcloud/ct-types/customers';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class CurrentUserService {
  public token = new BehaviorSubject<OAuthToken>(null);
  public customer = new BehaviorSubject<Customer>(null);
  public expired = new BehaviorSubject<number>(null);

  constructor(private storage: LocalStorageService, private router: Router) {
    const token = this.storage.retrieve('token');
    const customer = this.storage.retrieve('customer');
    const expired = this.storage.retrieve('expired_at');

    if (token) {
      this.token.next(token);
    }
    if (customer) {
      this.customer.next(customer);
    }
    if (expired) {
      this.expired.next(expired);
    }

    this.token.subscribe(change => this.storage.store('token', change));
    this.customer.subscribe(change => this.storage.store('customer', change));
    this.expired.subscribe(change => this.storage.store('expired_at', change));
  }

  get isLoggedIn() {
    return this.customer.getValue() !== null;
  }
}
