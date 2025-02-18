import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Star } from '../../models/star.model';

@Component({
    selector: 'app-rating',
    imports: [MatIconModule],
    templateUrl: './rating.component.html',
    styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() rating: number = 0;

  stars: Star[] = [];

  ngOnChanges(): void {
    this.stars = this. calculateStarRating(this.rating);
  }

  private calculateStarRating(rating: number): Star[] {
    return Array(5)
      .fill(null)
      .map((_, index) => {
        const starIndex = index + 1;
        if (starIndex <= Math.floor(rating)) {
          return { fill: 100 };
        } else if (starIndex === Math.floor(rating) + 1) {
          return { fill: (rating % 1) * 100 };
        } else {
          return { fill: 0 };
        }
      });
  }
}
