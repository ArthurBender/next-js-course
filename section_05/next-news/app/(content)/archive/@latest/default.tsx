import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news";
import { News } from "@/types";

const LatestNewsPage = async () => {
  const latestNews: News[] = await getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList newsList={latestNews} />
    </>
  )
}

export default LatestNewsPage