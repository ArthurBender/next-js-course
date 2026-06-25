import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

interface NewsDetailsPageProps {
  params: Promise<{ slug: string }>
}

const NewsImagePage = async ({params}: NewsDetailsPageProps) => {
  const newsSlug = (await params).slug;
  const newsItem = await getNewsItem(newsSlug);

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