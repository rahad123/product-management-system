import { db } from '../db/db';
const knex = require('knex')(db);

const categoryService = {
  createCategory: async (category: any) => {
    const createCategory = await knex('categories').insert(category);
    return createCategory;
  },

  getCategories: async () => {
    const categories = await knex.select('*').from('categories');
    return categories;
  },

  getCategory: async (category_id: any) => {
    const category = await knex('categories')
      .select()
      .where({ category_id: category_id })
      .andWhere({ category_id: category_id })
      .first();
    return category;
  },

  updateCategory: async (category_id: any, category: any) => {
    const updateCategory = await knex('categories').where('category_id', category_id).update(category);
    return updateCategory;
  },

  deleteCategory: async (category_id: any) => {
    const deleteCategory = await knex('categories').where('category_id', category_id).del();
    return deleteCategory;
  },

  slugExists: async (slug: string) => {
    const isSlugexists = await knex('categories')
      .select()
      .where({ slug: slug })
      .andWhere({ slug: slug })
      .first();
    return isSlugexists;
  }
}

export { categoryService }