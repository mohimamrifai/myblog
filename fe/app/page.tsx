import BlogPostList from "@/components/blog-post-list";
import CategoryList from "@/components/category-list";
import SearchInput from "@/components/search-input";
import SubscribeForm from "@/components/subscribe-form";
import { Post } from "@/lib/definitions";
import getAllPost from "@/lib/get-all-post";

export default async function Home() {
  const datas = await getAllPost()
  return (
    <main className="px-[8%]">
      <SearchInput />
      <CategoryList />
      {datas ? <BlogPostList datas={datas.data} /> : <p className="text-red-400 text-center mt-5">Kesalahan mengambil data</p>}
      <SubscribeForm />
    </main>
  );
}
