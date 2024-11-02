import BlogPost from '../../components/BlogPost';

const Blog = ({ posts }) => {
  return (
    <section className="container mx-auto p-6">
      <h1 className="text-3xl font-merriweather text-ocre-claro mb-6">Bitácora</h1>
      {posts.map((post) => (
        <BlogPost key={post.id} title={post.title} date={post.date} content={post.content} />
      ))}
    </section>
  );
};

export default Blog;
