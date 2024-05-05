import express from 'express';
import cors from 'cors'
import postsRoutes from './routes/postsRoutes'
import categoriesRoutes from './routes/categoriesRoutes'
import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json());
app.use('/api/v1/thumbnail', express.static('src/assets/thumbnail'))
app.use('/api/v1/avatar', express.static('src/assets/avatar'))
app.use('/api/v1/posts', postsRoutes);
app.use('/api/v1/categories', categoriesRoutes);
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/profile', userRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});