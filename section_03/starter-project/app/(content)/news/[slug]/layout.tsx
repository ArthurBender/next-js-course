const NewsDetailsLayout = ({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) => {
  return (
    <>
      {modal}
      {children}
    </>
  )
}

export default NewsDetailsLayout