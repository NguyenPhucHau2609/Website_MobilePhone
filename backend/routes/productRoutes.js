import express from 'express';
// Chỉ cần import 2 cái hàm này từ Controller thôi
import { getProducts, getProductById } from '../controllers/productController.js';

const router = express.Router();

// Route lấy tất cả điện thoại
router.get("/", getProducts);

// Route lấy chi tiết 1 điện thoại theo ID
router.get("/:id", getProductById);

export default router;