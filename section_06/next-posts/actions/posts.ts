"use server";

import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { redirect } from "next/navigation";
import { uploadImage } from "@/cloudinary";
import { revalidatePath } from "next/cache";

export const handleCreatePost = async (prevState: { errors: string[] }, formData: FormData) => {
  const title = formData.get('title') as string;
  const image = formData.get('image') as File;
  const content = formData.get('content') as string;

  const errors: string[] = [];
  if (!title || title.trim().length === 0) {
    errors.push('Title is required');
  }
  if (!content || content.trim().length === 0) {
    errors.push('Content is required');
  }
  if (!image || image.size === 0) {
    errors.push('Image is required');
  }

  if (errors.length > 0) {
    return { errors };
  }

  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch {
    throw new Error('Image upload to Cloudinary failed. Please try again.');
  }

  await storePost({
    title,
    content,
    imageUrl: imageUrl,
    userId: 1, // PLACEHOLDER
  });

  revalidatePath("/", "layout");
  redirect('/feed');
};

export const togglePostLikeStatus = async (postId: number) => {
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/", "layout");
}