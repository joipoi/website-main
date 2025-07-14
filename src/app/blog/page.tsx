import { getSortedPostsData } from '@/lib/getSortedPostsData';
import PostPreview from '@/components/PostPreview';
import NavBar from '@/components/NavBar';

async function BlogPage({
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string | undefined }>
}) {
  const { tag=undefined } = await searchParams;

  const posts = getSortedPostsData(tag); 


  return (
    <div>
      <NavBar></NavBar>
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <ul>
       {posts.map((post) => (
        <PostPreview key={post.title} post={post} />
          ))}
          </ul>
    </div>
  );
};

export default BlogPage;