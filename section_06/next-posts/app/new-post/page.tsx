import PostForm from "@/components/post-form";
import { handleCreatePost } from "@/actions/posts";

export default function NewPostPage() {
  return <PostForm handleCreatePost={handleCreatePost} />
}
