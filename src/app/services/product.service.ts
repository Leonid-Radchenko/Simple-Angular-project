import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { data } from '../../assets/data/data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<Product[]> {
    return of(data);
  }
}