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
    ;
    exports.products = [
        { name: 'Beautiful shoe', price: 25.55, desc: 'This is a great shoe', id: 1 },
        { name: 'Amazing robe', price: 9.99, desc: 'The best robe you can have', id: 2 },
        { name: 'Superb pants', price: 18.90, desc: 'Really amazing pants, you will love them!', id: 3 },
        { name: 'Wonderful hat', price: 12.50, desc: 'Keeps your head warm', id: 4 },
        { name: 'Gorgeous t-shirt', price: 15.50, desc: 'Indestructible fabric', id: 5 },
    ];
});