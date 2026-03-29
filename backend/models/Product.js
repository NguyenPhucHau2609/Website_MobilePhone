import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true }, // Apple, Samsung, Xiaomi...
    category: { type: String, default: 'Smartphone' },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    // Các thông số chuyên biệt cho Điện thoại
    screen: { type: String },   // Ví dụ: 6.7 inch, OLED
    battery: { type: String },  // Ví dụ: 5000mAh
    camera: { type: String },   // Ví dụ: 48MP Chính & 12MP Phụ
    ram: { type: String },      // Ví dụ: 8GB
    storage: { type: String }   // Ví dụ: 128GB, 256GB
}, {
    timestamps: true 
});

const Product = mongoose.model('Product', productSchema);
export default Product;