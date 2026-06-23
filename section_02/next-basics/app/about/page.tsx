import Header from "@/components/header"
import Link from "next/link"

const AboutPage = () => {
  return (
    <main>
      <Header />
      <h1>About the project: nothing for now</h1>
      <p><Link href="/">Home</Link></p>
    </main>
  )
}

export default AboutPage