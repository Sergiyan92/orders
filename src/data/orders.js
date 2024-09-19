import { products } from './products.js';

export const orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'Order 1 description',
    products: products.filter(product => product.order === 1)
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'Order 2 description',
    products: products.filter(product => product.order === 2)
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'Order 3 description',
    products: products.filter(product => product.order === 3)
  }
];
