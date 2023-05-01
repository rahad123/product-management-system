import { Application, Request, Response } from "express";
import { productService } from '../services/ProductService';
import { productValidator } from '../validator/ProductValidator'

const product = {
  createProduct: async (req: Request, res: Response) => {
    try {
      const { slug } = req.body;
      const validateSiteRequest = productValidator.createProductValidator.validate(req.body);
      if (validateSiteRequest.error) {
        return res.status(422).send("UNPROCESSABLE_ENTITY")
      };
      const isSlugexists = await productService.slugExists(slug);
      if(isSlugexists?.slug) return res.status(422).send("SLUG_ALREADY_EXISTS");
      const createProduct = await productService.createProduct(req.body);
      res.status(201).json(createProduct);
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  getProducts: async (req: Request, res: Response) => {
    try {
      const products = await productService.getProducts();
      res.json ({
        products: products,
      });
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  getProduct: async (req: Request, res: Response) => {
    try {
      const { product_id } = req.params;
      const product = await productService.getProduct(product_id);
      res.json ({
        product: product,
      })
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  updateProduct: async (req: Request, res: Response) => {
    try {
      const { slug } = req.body;
      const { product_id } = req.params;
      const validateSiteRequest = productValidator.updateProductValidator.validate(req.body);
      if (validateSiteRequest.error) {
        return res.status(422).send("UNPROCESSABLE_ENTITY")
      };

      if(slug) {
        const isSlugexists = await productService.slugExists(slug);
        if(isSlugexists?.slug) return res.status(422).send("SLUG_ALREADY_EXISTS");
      }

      const updateProduct = await productService.updateProduct(product_id, req.body);
      res.json ({
        updateProduct: updateProduct,
      })
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  deleteProduct: async (req: Request, res: Response) => {
    try {
      const { product_id } = req.params;
      const deleteProduct = await productService.deleteProduct(product_id);
      if (!deleteProduct) return false;
      res.json ({
        deleteProduct: true,
      })
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },
}

export { product }