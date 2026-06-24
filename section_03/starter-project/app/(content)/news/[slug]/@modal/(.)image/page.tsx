import ModalBackdrop from "@/components/modal/modal-backdrop";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

interface NewsDetailsPageProps {
  params: Promise<{ slug: string }>
}

const InterceptedNewsImagePage = async ({params}: NewsDetailsPageProps) => {
  const newsSlug = (await params).slug;
  const newsItem = DUMMY_NEWS.find(news => news.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  )
}

export default InterceptedNewsImagePage