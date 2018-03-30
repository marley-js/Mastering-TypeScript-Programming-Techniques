(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./product-class"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var product_class_1 = require("./product-class");
    var prod1 = new product_class_1.Product('football', 100);
    var discountPrice = prod1.getDiscountedPrice(10);
    var prodName = prod1.getProductName();
    console.log(prodName + " has a discounted price of " + discountPrice);
});
//# sourceMappingURL=product.js.map