import PostPage from './[postId]/page';

export default async function Page() {
  const posts = await fetchPosts(); 
  return <PostPage posts={posts} />;
}

async function fetchPosts() {
  const response = await fetch('your-api-endpoint'); 
  const data = await response.json();
  return data;
}