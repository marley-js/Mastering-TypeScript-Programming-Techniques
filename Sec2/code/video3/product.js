"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getDiscountedPrice = function (discount) {
        return this.price - (this.price * discount / 100);
    };
    return Product;
}());
exports.Product = Product;
