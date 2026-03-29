import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';

// 1. Cấu hình để đọc file .env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 2. Lấy link DB từ file .env (Cách này bảo mật hơn file config/key)
const db = process.env.MONGODB_URI;

// 3. Kết nối Database với cấu hình chống "treo" mạng
mongoose.connect(db, {
    serverSelectionTimeoutMS: 5000 // Nếu sau 5 giây không thấy DB thì báo lỗi ngay, không đợi vô tận
})
.then(() => console.log('✅ MongoDB connected - đã thông suốt!'))
.catch(err => {
    console.log(' Lỗi kết nối :', err.message);
    console.log(' Mẹo: Thử bật 4G điện thoại phát cho máy tính xem sao!');
});

// 4. Cổng chạy Server
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("Server mobile đang chạy...");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});