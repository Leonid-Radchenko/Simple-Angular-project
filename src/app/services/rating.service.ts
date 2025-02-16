import { Injectable } from '@angular/core';
import { Star } from '../models/star.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  calculateAverageRating(reviews: { rating: number }[]): number {
    if (!reviews || reviews.length === 0) return 0;

    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return total / reviews.length;
  }
}