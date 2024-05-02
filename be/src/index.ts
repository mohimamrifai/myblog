import express from 'express';
import cors from 'cors'
import postsRoutes from './routes/postsRoutes'
import categoriesRoutes from './routes/categoriesRoutes'
import authRoutes from './routes/authRoutes'

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json());
app.use('/api/v1/thumbnail', express.static('src/assets/thumbnail'))
app.use('/api/v1/posts', postsRoutes);
app.use('/api/v1/categories', categoriesRoutes);
app.use('/api/v1/auth', authRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});