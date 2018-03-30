(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Product = (function () {
        function Product(name, price) {
            this.name = name;
            this.price = price;
        }
        Product.prototype.getDiscountedPrice = function (discount) {
            return this.price - (this.price * discount / 100);
        };
        Product.prototype.getProductName = function () {
            return this.name;
        };
        return Product;
    }());
    exports.Product = Product;
});
//# sourceMappingURL=product-class.js.map