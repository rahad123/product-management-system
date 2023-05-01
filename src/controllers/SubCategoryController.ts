import { Application, Request, Response } from "express";
import { subCategoryService } from '../services/SubCategoryService';
import { subCategoryValidator } from '../validator/SubCategoryValidator'

const subCategory = {
  createSubCategory: async (req: Request, res: Response) => {
    try {
      const { slug } = req.body;
      const validateSiteRequest = subCategoryValidator.createSubCategoryValidator.validate(req.body);
      if (validateSiteRequest.error) {
        return res.status(422).send("UNPROCESSABLE_ENTITY")
      }

      const isSlugexists = await subCategoryService.slugExists(slug);
      if(isSlugexists?.slug) return res.status(422).send("SLUG_ALREADY_EXISTS");

      const createCategory = await subCategoryService.createSubCategory(req.body);
      res.status(201).json(createCategory);
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  getSubCategories: async (req: Request, res: Response) => {
    try {
      const subCategory = await subCategoryService.getSubCategories();
      res.json ({
        subCategory: subCategory,
      });
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  getSubCategory: async (req: Request, res: Response) => {
    try {
      const { subCategory_id } = req.params;
      const subCategory = await subCategoryService.getSubCategory(subCategory_id);
      res.json ({
        subCategory: subCategory,
      })
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  updateSubCategory: async (req: Request, res: Response) => {
    try {
      const { slug } = req.body;
      const { subCategory_id } = req.params;
      const validateSiteRequest = subCategoryValidator.updateSubCategoryValidator.validate(req.body);
      if (validateSiteRequest.error) {
        return res.status(422).send("UNPROCESSABLE_ENTITY")
      };

      if(slug) {
        const isSlugexists = await subCategoryService.slugExists(slug);
        if(isSlugexists?.slug) return res.status(422).send("SLUG_ALREADY_EXISTS");
      }

      const updateSubCategory = await subCategoryService.updateSubCategory(subCategory_id, req.body);
      res.json ({
        updateSubCategory: updateSubCategory,
      })
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  deleteSubCategory: async (req: Request, res: Response) => {
    try {
      const { subCategory_id } = req.params;
      const deleteSubCategory = await subCategoryService.deleteSubCategory(subCategory_id);
      if (!deleteSubCategory) return false;
      res.json ({
        deleteSubCategory: true,
      })
    } catch (err) {
        return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },
}

export { subCategory }