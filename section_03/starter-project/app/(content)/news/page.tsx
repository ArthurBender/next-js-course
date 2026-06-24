import NewsList from "@/components/news/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>

      <NewsList newsList={DUMMY_NEWS} />
    </>
  )
}

export default NewsPage