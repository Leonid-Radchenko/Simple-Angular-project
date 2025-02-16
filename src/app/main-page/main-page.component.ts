import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Product } from '../shared/models/product.model';
import { SortByPipe } from '../shared/pipes/sort-by.pipe';
import { Observable } from 'rxjs';
import { ProductService } from '../shared/services/product.service';

@Component({
    selector: 'app-main-page',
    imports: [ProductCardComponent, CommonModule, SortByPipe],
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  products$: Observable<Product[]> | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }
}