import { db } from '../db/db';
const knex = require('knex')(db);

const productService = {
  createProduct: async (product: any) => {
    const createProduct = await knex('products').insert(product);
    return createProduct;
  },

  getProducts: async () => {
    const products = await knex('products')
    .join('categories', 'products.category_id', 'categories.category_id')
    .select(
      'products.name as productName', 
      'products.slug',
      'products.status',
      'products.description',
      'products.price',
      'categories.name as categoryName'
    )
  
  return products;
  },

  getProduct: async (product_id: any) => {

    const product = await knex('products')
    .join('categories', 'products.category_id', 'categories.category_id')
    .select(
      'products.name as productName', 
      'products.slug',
      'products.status',
      'products.description',
      'products.price',
      'categories.name as categoryName'
    )
    .where({ product_id: product_id })
    .first();

    return product;
  },

  updateProduct: async (product_id: any, product: any) => {
    const updateProduct = await knex('products').where('product_id', product_id).update(product);
    return updateProduct;
  },

  deleteProduct: async (product_id: any) => {
    const deleteProduct = await knex('products').where('product_id', product_id).del();
    return deleteProduct;
  },

  slugExists: async (slug: string) => {
    const isSlugexists = await knex('products')
      .select()
      .where({ slug: slug })
      .andWhere({ slug: slug })
      .first();
    return isSlugexists;
  }
}

export { productService }