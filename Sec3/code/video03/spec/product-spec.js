const productModule = require('./../product-class.js');

describe('Product Unit test', () => {
  let product;
  beforeEach(() => {
    product = new productModule.Product('football', 100);
  })

  it('should return the product name', () => {
    expect(product.getProductName()).toBe('football');
  });
  it('should return 10% discount price', () => {
    expect(product.getDiscountedPrice(10)).toBe(90);
  });
  it('should return 50% discount price', () => {
    expect(product.getDiscountedPrice(50)).toBe(50);
  });
});