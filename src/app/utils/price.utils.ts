export function getDiscountColor(discount: number): string {
  if (discount >= 70) return 'red';
  if (discount >= 50) return 'rgb(237, 137, 154)';
  return 'orange';
}