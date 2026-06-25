"use client";

import { useFormStatus } from "react-dom"

const FormSubmit = () => {
  const status = useFormStatus();

  if (status.pending) {
    return <span>Creating post...</span>
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  )
}

export default FormSubmit