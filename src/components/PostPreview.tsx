import Link from 'next/link';
import {PostData} from '@/lib/PostData';
import createSlug from '@/lib/createSlug';

export default function PostPreview({ post }: { post: PostData }){
    const slug = createSlug(post.title);
    return (
        <li className="postLI">
            <Link key={slug} href={`/blog/${slug}`} className="block">
                <h2 className="postTitle">{post.title}</h2>
                </Link>
                <span className="postDate">{post.date}</span>
                {post.tags.map((tag, index) => (
  <a key={index} href={`/blog/?tag=${tag}`} className="postTag">
    {tag}
  </a>
))}

           
        </li>
    );
};