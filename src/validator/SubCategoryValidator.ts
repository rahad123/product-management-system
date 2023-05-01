import Joi from 'joi';

const subCategoryValidator = {
    createSubCategoryValidator: Joi.object({
        name: Joi.string().required(),
        slug: Joi.string().min(1),
        category_id: Joi.number(),
    }),
    updateSubCategoryValidator: Joi.object({
        subcategory_id: Joi.number(),
        name: Joi.string(),
        slug: Joi.string(),
    }),
}

export { subCategoryValidator };