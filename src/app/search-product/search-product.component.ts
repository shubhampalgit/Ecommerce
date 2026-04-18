import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-product.component.html'
})
export class SearchProductComponent implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];
  searchText: string = '';

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service.loadProducts();
    this.products = this.service.getProducts();
    this.filteredProducts = this.products;
  }

  search() {
    const text = this.searchText.toLowerCase();

    this.filteredProducts = this.products.filter(p =>
      p.pname.toLowerCase().includes(text)
    );
  }
}