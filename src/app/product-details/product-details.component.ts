import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReviewCountPipe } from '../shared/pipes/review-count.pipe';
import { DiscountPricePipe } from '../shared/pipes/discount-price.pipe';
import { Star } from '../shared/models/star.model';
import { RatingComponent } from '../shared/components/rating/rating.component';
import { ProductService } from '../shared/services/product.service';
import { RatingService } from '../shared/services/rating.service';
import { ButtonComponent } from '../shared/components/button/button.component';
import { ButtonConfig } from '../shared/models/button.model';

@Component({
    selector: 'app-product-details',
    imports: [
        CommonModule,
        MatIconModule,
        ReviewCountPipe,
        DiscountPricePipe,
        RatingComponent,
        ButtonComponent,
    ],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;

  product!: Product | null;

  stars: Star[] = [];

  averageRating: number = 0;

  showImageModal: boolean = false;

  showFullDescription: boolean = false;
  
  showReviewsModal: boolean = false;

  closeButtonConfig: ButtonConfig = {
    label: 'Close',
    color: 'primary',
  };

  addToCartButtonConfig: ButtonConfig = {
    label: 'Add to cart',
    color: 'success',
    icon: 'shopping_cart'
  }

  addToWishListButtonConfig: ButtonConfig = {
    label: 'Add to Wish List',
    color: 'secondary',
    icon: 'favorite_border'
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private ratingService: RatingService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchProduct(this.productId);
  }

  private fetchProduct(productId: number): void {
    this.productService.getProductById(productId).subscribe({
      next: (data) => {
        if (data) {
          this.product = data;
          this.calculateRating(this.product?.review || []);
        } else {
          console.warn('Product not found');
        }
      },
      error: (err) => {
        console.error('Error fetching product:', err);
      }
    });
  }

  private calculateRating(reviews: Product["review"]): void {
    this.averageRating = this.ratingService.calculateAverageRating(reviews);
  }

  toggleVisibility(targetVisibility: 'showImageModal' | 'showFullDescription' | 'showReviewsModal'): void {
    this[targetVisibility] = !this[targetVisibility];
  }
}