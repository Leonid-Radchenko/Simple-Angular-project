import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  calculateAverageRating(reviews: { rating: number }[]): number {
    if (!reviews || reviews.length === 0) return 0;

    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return total / reviews.length;
  }

  calculateStarRating(rating: number): { fill: number }[] {
    return Array(5).fill({ fill: 0 }).map((_, index) => {
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