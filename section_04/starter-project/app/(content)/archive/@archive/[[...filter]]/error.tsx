'use client';

const NewsFilterError = ({error}: {error: Error}) => {
  return (
    <div className="error">
      <h2>An error occurred</h2>
      <p>{error.message}</p>
    </div>
  )
}

export default NewsFilterError