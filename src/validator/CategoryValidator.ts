import Joi from 'joi';

const categoryValidator = {
    createCategoryValidator: Joi.object({
        name: Joi.string().required(),
        slug: Joi.string().min(1),
    }),
    updateCategoryValidator: Joi.object({
        category_id: Joi.number(),
        name: Joi.string(),
        slug: Joi.string(),
    }),
}

export { categoryValidator };