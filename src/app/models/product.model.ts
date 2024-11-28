export interface Product {
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  description: string;
  brand: string;
  tags: string[];
  image: string;
  highlight: boolean;
}