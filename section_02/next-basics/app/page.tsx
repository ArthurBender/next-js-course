import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Main Page</h1>

      <p><Link href="/posts">Posts</Link></p>
      <p><Link href="/about">About</Link></p>
    </main>
  );
}
