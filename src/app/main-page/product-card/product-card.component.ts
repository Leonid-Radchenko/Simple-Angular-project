import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { LimitCharactersPipe } from '../../pipes/limit-characters.pipe';
import { getDiscountedPrice, getDiscountColor } from '../../utils/price.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, LimitCharactersPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;

  discountedPrice!: number;
  discountColor!: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.discountedPrice = getDiscountedPrice(this.product.price, this.product.discount);
    this.discountColor = getDiscountColor(this.product.discount);
  }

  onCardClick(): void {
    this.router.navigate(['/products', this.product.id]);
  }
}
