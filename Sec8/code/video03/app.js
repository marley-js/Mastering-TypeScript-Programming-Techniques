(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "restify", "./products"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const restify = require("restify");
    const products_1 = require("./products");
    const server = restify.createServer();
    const port = 3000;
    server.use(restify.plugins.bodyParser());
    server.get('/api/products', (request, response) => {
        console.log(products_1.products);
        response.json(products_1.products);
    });
    server.get('/api/products/:id', (request, response) => {
        const id = Number(request.params.id);
        const product = products_1.products.filter(product => product.id === id);
        response.json(product);
    });
    server.post('/api/products', (request, response) => {
        const newProduct = request.body;
        products_1.products.push(newProduct);
        response.json(products_1.products);
    });
    server.listen(port, () => console.info(`REST API is running on port ${port}`));
});
