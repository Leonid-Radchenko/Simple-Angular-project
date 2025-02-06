import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPrice',
  standalone: true
})
export class DiscountPricePipe implements PipeTransform {
  transform(price: number | undefined, discount: number | undefined): string {
    if (price === undefined || discount === undefined) {
      return 'N/A';
    }

    const validDiscount = Math.abs(discount);
    
    if(validDiscount > 100) {
      return 'Invalid discount';
    }

    const discountedPrice = price - (price * validDiscount) / 100;
    return `${discountedPrice.toFixed(0)} EUR`;
  }
}