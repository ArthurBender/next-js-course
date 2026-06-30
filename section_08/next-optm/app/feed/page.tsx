import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';
import { Metadata } from 'next';

export async function generateMetadata() {
  const posts = await getPosts();
  const postCount = posts.length;
  
  return {
    title: `All posts (${postCount})`,
    description: 'A list of all posts on the site.',
  } as Metadata;
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
