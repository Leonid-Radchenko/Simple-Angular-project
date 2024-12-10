import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { LimitCharactersPipe } from '../../pipes/limit-characters.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, LimitCharactersPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;

  getDiscountColor(): string {
    if (this.product.discount >= 70) return 'red';
    if (this.product.discount >= 60) return 'rgb(237, 137, 154)';
    return 'orange';
  }

  getDiscountedPrice(): number {
    return this.product.price * (1 - this.product.discount / 100);
  }
}
