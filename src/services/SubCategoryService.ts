import { db } from '../db/db';
const knex = require('knex')(db);

const subCategoryService = {
  createSubCategory: async (subCategory: any) => {
    const createCategory = await knex('sub_categories').insert(subCategory);
    return createCategory;
  },

  getSubCategories: async () => {
    const subCategory = await knex.select('*').from('sub_categories');
    return subCategory;
  },

  getSubCategory: async (subCategory_id: any) => {
    const subCategory = await knex('sub_categories')
      .select()
      .where({ subCategory_id: subCategory_id })
      .andWhere({ subCategory_id: subCategory_id })
      .first();
    return subCategory;
  },

  updateSubCategory: async (subCategory_id: any, subCategory: any) => {
    const updateSubCategory = await knex('sub_categories').where('subCategory_id', subCategory_id).update(subCategory);
    return updateSubCategory;
  },

  deleteSubCategory: async (subCategory_id: any) => {
    const deleteSubCategory = await knex('sub_categories').where('subCategory_id', subCategory_id).del();
    return deleteSubCategory;
  },

  slugExists: async (slug: string) => {
    const isSlugexists = await knex('sub_categories')
      .select()
      .where({ slug: slug })
      .andWhere({ slug: slug })
      .first();
    return isSlugexists;
  }
}

export { subCategoryService }