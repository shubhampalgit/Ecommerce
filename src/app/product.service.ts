import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: any[] = [];

  constructor(private http: HttpClient) {}

  loadProducts() {
    if (this.products.length === 0) {
      this.http.get<any[]>('assets/db.json').subscribe(data => {
        this.products = data;
      });
    }
  }

  getProducts() {
    return this.products;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}