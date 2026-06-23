import Link from "next/link"

const PostsPage = () => {
  return (
    <main>
      <h1>Posts Page</h1>

      <p><Link href="/posts/1">Post 1</Link></p>
      <p><Link href="/posts/2">Post 2</Link></p>
      <p><Link href="/posts/3">Post 3</Link></p>

      <p><Link href="/">Home</Link></p>
    </main>
  )
}

export default PostsPage