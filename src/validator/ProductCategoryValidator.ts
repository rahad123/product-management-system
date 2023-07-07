import Joi from "joi";

const productCategoryValidator = {
  createProductCategoryValidator: Joi.object({
    category_id: Joi.number(),
    subcategory_id: Joi.number(),
    name: Joi.string().required(),
    slug: Joi.string().min(1),
  }),
  updateProductCategoryValidator: Joi.object({
    product_category_id: Joi.number(),
    name: Joi.string(),
    slug: Joi.string(),
  }),
};

export { productCategoryValidator };
