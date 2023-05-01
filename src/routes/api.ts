import { Router } from 'express';
const router = Router();

import { category } from '../controllers/CategoryController';
import { subCategory } from '../controllers/SubCategoryController';
import { productCategory } from '../controllers/ProductCategoryController';
import { product } from '../controllers/ProductController';


// Category
router.post("/categories", category.createCategory);
router.get("/categories", category.getCategories);
router.get("/categories/:category_id", category.getCategory);
router.put("/categories/:category_id", category.updateCategory);
router.delete("/categories/:category_id", category.deleteCategory);

// subCategory
router.post("/subCategories", subCategory.createSubCategory);
router.get("/subCategories", subCategory.getSubCategories);
router.get("/subCategories/:subCategory_id", subCategory.getSubCategory);
router.put("/subCategories/:subCategory_id", subCategory.updateSubCategory);
router.delete("/subCategories/:subCategory_id", subCategory.deleteSubCategory);

// productCategory
router.post("/productCategories", productCategory.createProductCategory);
router.get("/productCategories", productCategory.getProductCategories);
router.get("/productCategories/:productCategory_id", productCategory.getProductCategory);
router.put("/productCategories/:productCategory_id", productCategory.updateProductCategory);
router.delete("/productCategories/:productCategory_id", productCategory.deleteProductCategory);

// product
router.post("/products", product.createProduct);
router.get("/products", product.getProducts);
router.get("/products/:product_id", product.getProduct);
router.put("/products/:product_id", product.updateProduct);
router.delete("/products/:product_id", product.deleteProduct);

export default router;