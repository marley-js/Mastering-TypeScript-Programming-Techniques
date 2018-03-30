export interface IProduct {
  name: string;
  price: number;
  desc: string;
  id: number;
};

export class First {
  products: IProduct[];
  constructor() {
    fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(products => this.products = products);
  }
}
