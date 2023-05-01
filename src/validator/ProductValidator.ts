import Joi from 'joi';

const productValidator = {
    createProductValidator: Joi.object({
        category_id: Joi.number(),
        subcategory_id: Joi.number(),
        product_category_id: Joi.number(),
        name: Joi.string().required(),
        slug: Joi.string().min(1),
        description: Joi.string(),
        status: Joi.string(),
        price: Joi.number().min(6).required(),
    }),

    updateProductValidator: Joi.object({
        product_id: Joi.number(),
        name: Joi.string(),
        slug: Joi.string(),
        description: Joi.string(),
        status: Joi.string(),
        price: Joi.number().min(6),
    }),
}

export { productValidator };