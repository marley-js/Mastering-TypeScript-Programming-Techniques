class Product {
  private name: string;
  private price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  getDiscountedPrice(discount: number): number {
    return this.price - (this.price * discount / 100);
  }
  getProductName(): string {
    return this.name;
  }

}

export { Product };