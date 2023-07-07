import { Application, Request, Response } from "express";
import { categoryService } from "../services/CategoryService";
import { categoryValidator } from "../validator/CategoryValidator";
const category = {
  createCategory: async (req: Request, res: Response) => {
    try {
      const { slug } = req.body;
      const validateSiteRequest =
        categoryValidator.createCategoryValidator.validate(req.body);
      if (validateSiteRequest.error) {
        return res.status(422).send("UNPROCESSABLE_ENTITY");
      }
      const isSlugexists = await categoryService.slugExists(slug);
      if (isSlugexists?.slug)
        return res.status(422).send("SLUG_ALREADY_EXISTS");

      const createCategory = await categoryService.createCategory(req.body);
      res.status(201).json(createCategory);
    } catch (err) {
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  getCategories: async (req: Request, res: Response) => {
    try {
      const category = await categoryService.getCategories();
      res.json({
        category: category,
      });
    } catch (err) {
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  getCategory: async (req: Request, res: Response) => {
    try {
      const { category_id } = req.params;
      const category = await categoryService.getCategory(category_id);
      res.json({
        category: category,
      });
    } catch (err) {
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  updateCategory: async (req: Request, res: Response) => {
    try {
      const { slug } = req.body;
      const { category_id } = req.params;

      const validateSiteRequest =
        categoryValidator.updateCategoryValidator.validate(req.body);
      if (validateSiteRequest.error) {
        return res.status(422).send("UNPROCESSABLE_ENTITY");
      }

      if (slug) {
        const isSlugexists = await categoryService.slugExists(slug);
        if (isSlugexists?.slug)
          return res.status(422).send("SLUG_ALREADY_EXISTS");
      }

      const updateCategory = await categoryService.updateCategory(
        category_id,
        req.body,
      );
      res.json({
        updateCategory: updateCategory,
      });
    } catch (err) {
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },

  deleteCategory: async (req: Request, res: Response) => {
    try {
      const { category_id } = req.params;
      const deleteCategory = await categoryService.deleteCategory(category_id);
      if (!deleteCategory) return false;
      res.json({
        deleteCategory: true,
      });
    } catch (err) {
      return res.status(500).send("INTERNAL_SERVER_ERROR");
    }
  },
};

export { category };
