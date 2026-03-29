import Product from '../models/Product.js';

// @desc    Lấy tất cả điện thoại
// @route   GET /api/products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Lỗi lấy danh sách sản phẩm" });
    }
};

// @desc    Lấy chi tiết 1 điện thoại theo ID
// @route   GET /api/products/:id
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: "Không tìm thấy điện thoại" });
        }
    } catch (error) {
        res.status(500).json({ message: "Lỗi Server" });
    }
};