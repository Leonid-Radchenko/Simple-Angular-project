import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { LimitCharactersPipe } from '../../pipes/limit-characters.pipe';
import { getDiscountColor } from '../../utils/price.utils';
import { Router } from '@angular/router';
import { DiscountPricePipe } from '../../pipes/discount-price.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, LimitCharactersPipe, DiscountPricePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;

  discountedPrice!: number;
  
  discountColor!: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.discountColor = getDiscountColor(this.product.discount);
  }

  onCardClick(): void {
    this.router.navigate(['/products', this.product.id]);
  }
}
