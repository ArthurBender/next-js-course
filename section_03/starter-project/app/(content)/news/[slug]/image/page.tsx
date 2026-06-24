import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

interface NewsDetailsPageProps {
  params: Promise<{ slug: string }>
}

const NewsImagePage = async ({params}: NewsDetailsPageProps) => {
  const newsSlug = (await params).slug;
  const newsItem = DUMMY_NEWS.find(news => news.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  )
}

export default NewsImagePage