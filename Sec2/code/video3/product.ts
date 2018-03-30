export class Product {
  private name: string;
  private price: number;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getDiscountedPrice(discount): number {
    return this.price - (this.price * discount / 100);
  }
}