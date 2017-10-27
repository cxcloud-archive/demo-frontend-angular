import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { PRODUCTS } from '../../mock/products';
import { Product } from '../../types/product.model';
import { CommerceService } from '../../core/commerce/commerce.service';
import { ActivatedRoute } from '@angular/router';;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [CommerceService]
})
export class ProductListComponent implements OnInit {
  products: Product[];
  categoryId: string;

  constructor(
    private commerceService: CommerceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Get category id
      this.categoryId = params['id'];

      // Get all product from category
      this.getProducts();
    });
  }

  getProducts() {
    this.commerceService
    .getProducts(this.categoryId)
    .subscribe(data => this.products = data);
  }

  getAllVariants() {
    // Add master variant as first item in variants
    this.products.forEach(product => {
      if (product.masterVariant) {
        product.variants.unshift(product.masterVariant);
      }
    });
  }

}
