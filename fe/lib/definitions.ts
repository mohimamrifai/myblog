export type Post = {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  excerpt: string;
  published: boolean;
  read_time: number;
  views: number;
  likes: number;
  body: string;
  createdAt: string;
  category_id: string;
  category: Category
};

export type Category = {
  id: string;
  name: string;
  slug: string;
}
