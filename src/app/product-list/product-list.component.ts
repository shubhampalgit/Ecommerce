import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products: any[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.loadProducts();
    this.products = this.service.getProducts();
  }

  deleteProduct(index: number): void {
    this.service.deleteProduct(index);
  }
}