import { Product } from './product-class';

const prod1 = new Product('football', 100);
const discountPrice = prod1.getDiscountedPrice(10);
const prodName = prod1.getProductName();
console.log(`${prodName} has a discounted price of ${discountPrice}`);