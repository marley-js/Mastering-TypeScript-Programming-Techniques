import { Product } from './product';

describe('Product Unit test', () => {
  let product;
  beforeEach(() => {
    product = new Product('football', 100);
  })

  it('should return the product name', () => {
    expect(product.getName()).toBe('football');
  });
  it('should return the product price', () => {
    expect(product.getPrice()).toBe(100);
  });
  it('should return the exact product price', () => {
    expect(product.getPrice()).not.toBe(110);
  });
  it('should return 10% discount price', () => {
    expect(product.getDiscountedPrice(10)).toBe(90);
  });
  it('should return 50% discount price', () => {
    expect(product.getDiscountedPrice(50)).toBe(50);
  });
});