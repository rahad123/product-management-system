import { db } from "../db/db";
const knex = require("knex")(db);

const productCategoryService = {
  productCategory: async (productCategory: any) => {
    const createProductCategory = await knex("product_categories").insert(
      productCategory,
    );
    return createProductCategory;
  },

  getProductCategories: async () => {
    const createProductCategory = await knex
      .select("*")
      .from("product_categories");
    return createProductCategory;
  },

  getProductCategory: async (productCategory_id: any) => {
    const productCategory = await knex("product_categories")
      .select()
      .where({ productCategory_id: productCategory_id })
      .andWhere({ productCategory_id: productCategory_id })
      .first();
    return productCategory;
  },

  updateProductCategory: async (
    productCategory_id: any,
    productcategory: any,
  ) => {
    const updateProductCategory = await knex("product_categories")
      .where("id", productCategory_id)
      .update(productcategory);
    return updateProductCategory;
  },

  deleteProductCategory: async (productCategory_id: any) => {
    const deleteProductCategory = await knex("product_categories")
      .where("id", productCategory_id)
      .del();
    return deleteProductCategory;
  },

  slugExists: async (slug: string) => {
    const isSlugexists = await knex("product_categories")
      .select()
      .where({ slug: slug })
      .andWhere({ slug: slug })
      .first();
    return isSlugexists;
  },
};

export { productCategoryService };
