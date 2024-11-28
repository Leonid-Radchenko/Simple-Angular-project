import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Product[]>('assets/data/products.json').subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error loading products:', err);
      }
    });
  }
}
