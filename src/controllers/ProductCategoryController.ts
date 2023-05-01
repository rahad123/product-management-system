import { Application, Request, Response } from "express";
import { productCategoryService } from '../services/ProductCategoryService';
import { productCategoryValidator } from '../validator/ProductCategoryValidator';

const productCategory = {
  createProductCategory: async (req: Request, res: Response) => {
    try {
      const { slug } = req.body;
      const validateSiteRequest = productCategoryValidator.createProductCategoryValidator.validate(req.body);
      if (validateSiteRequest.error) {
        return res.status(422).send("UNPROCESSABLE_ENTITY")
      };

      const isSlugexists = await productCategoryService.slugExists(slug);
      if(isSlugexists?.slug) return res.status(422).send("SLUG_ALREADY_EXISTS");

      const createProductCategory = await productCategoryService.productCategory(req.body);
      res.status(201).json(createProductCategory);
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  getProductCategories: async (req: Request, res: Response) => {
    try {
      const productCategories = await productCategoryService.getProductCategories();
      res.json ({
        productCategories: productCategories,
      });
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  getProductCategory: async (req: Request, res: Response) => {
    try {
      const { productCategory_id } = req.params;
      const productCategory = await productCategoryService.getProductCategory(productCategory_id);
      res.json ({
        productCategory: productCategory,
      })
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  updateProductCategory: async (req: Request, res: Response) => {
    try {
      const { slug } = req.body;
      const { productCategory_id } = req.params;
      const validateSiteRequest = productCategoryValidator.updateProductCategoryValidator.validate(req.body);
      if (validateSiteRequest.error) {
        return res.status(422).send("UNPROCESSABLE_ENTITY")
      };

      if(slug) {
        const isSlugexists = await productCategoryService.slugExists(slug);
        if(isSlugexists?.slug) return res.status(422).send("SLUG_ALREADY_EXISTS");
      }

      const updateProductCategory = await productCategoryService.updateProductCategory(productCategory_id, req.body);
      res.json ({
        updateProductCategory: updateProductCategory,
      })
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  deleteProductCategory: async (req: Request, res: Response) => {
    try {
      const { productCategory_id } = req.params;
      const deleteProductCategory = await productCategoryService.deleteProductCategory(productCategory_id);
      if(!deleteProductCategory) return false;
      res.json ({
        deleteProductCategory: true,
      })
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },
}

export { productCategory }