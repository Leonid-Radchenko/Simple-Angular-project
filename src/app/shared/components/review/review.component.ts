import { Component, Input } from '@angular/core';
import { Review } from '../../models/review.model';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-review',
  imports: [RatingComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  @Input() review!: Review;
}
