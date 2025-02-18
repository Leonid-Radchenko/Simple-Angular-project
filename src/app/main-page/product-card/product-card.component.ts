import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { LimitCharactersPipe } from '../../shared/pipes/limit-characters.pipe';
import { getDiscountColor } from '../../shared/utils/price.utils';
import { Router } from '@angular/router';
import { DiscountPricePipe } from '../../shared/pipes/discount-price.pipe';

@Component({
    selector: 'app-product-card',
    imports: [CommonModule, LimitCharactersPipe, DiscountPricePipe],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit{
  @Input() product!: Product;

  discountColor!: string;

  private router = inject(Router);

  ngOnInit() {
    this.discountColor = getDiscountColor(this.product.discount);
  }

  onCardClick(): void {
    this.router.navigate(['/products', this.product.id]);
  }
}
