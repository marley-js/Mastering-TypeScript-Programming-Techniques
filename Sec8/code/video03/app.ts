import * as restify from 'restify';
import { IProduct, products } from './products';

const server: restify.Server = restify.createServer();
const port: number = 3000;

server.use(restify.plugins.bodyParser());

server.get('/api/products', (request: restify.Request, response: restify.Response) => {
  console.log(products);
  response.json(products);
});

server.get('/api/products/:id', (request: restify.Request, response: restify.Response) => {
  const id = Number(request.params.id);
  const product = products.filter(product => product.id === id);
  response.json(product);
});

server.post('/api/products', (request: restify.Request, response: restify.Response) => {
  const newProduct: IProduct = request.body;
  products.push(newProduct);
  response.json(products);
});

server.listen(port, () => console.info(`REST API is running on port ${port}`));