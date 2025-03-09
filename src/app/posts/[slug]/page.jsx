"use server"
// app/posts/[slug]/page.jsx

import { getPostsBySlug } from '@/lib/posts'; // Import the function
import { parseMDX } from '@/lib/mdxParser'; // You might need a custom MDX parser

const PostPage = async ({ params }) => {
  const { slug } = await params;

  // Fetch the post by its slug using the function from lib/posts
  const post = await getPostsBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }


  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostPage;

