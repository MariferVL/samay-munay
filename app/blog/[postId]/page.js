"use client";

import { usePathname } from 'next/navigation';
import BlogPost from '../../../components/BlogPost';

const PostPage = ({ posts }) => {
  const pathname = usePathname();
  const postId = pathname.split('/').pop();

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <section className="container mx-auto p-6">
      <BlogPost title={post.title} date={post.date} content={post.content} />
    </section>
  );
};

export default PostPage;
