"use client";

import FormSubmit from "@/components/form-submit";

import { useActionState } from "react";

const PostForm = ({ handleCreatePost }: { handleCreatePost: (prevState: { errors: string[] }, formData: FormData) => Promise<{ errors: string[] }> }) => {
  const [state, formAction] = useActionState(handleCreatePost, { errors: [] });

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
            required
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows={5} required />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>

        {state.errors && state.errors.length > 0 && (
          <ul className="form-errors">
            {state.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}

export default PostForm