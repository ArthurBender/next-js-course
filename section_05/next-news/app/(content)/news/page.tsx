import NewsList from "@/components/news/news-list";
import { getAllNews } from "@/lib/news";

import { News } from "@/types";

const NewsPage = async () => {
  const news: News[] = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList newsList={news} />
    </>
  )
}

export default NewsPage