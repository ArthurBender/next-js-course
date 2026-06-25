import ModalBackdrop from "@/components/modal/modal-backdrop";
import { getNewsItem } from "@/lib/news";

import { notFound } from "next/navigation";

interface NewsDetailsPageProps {
  params: Promise<{ slug: string }>
}

const InterceptedNewsImagePage = async ({params}: NewsDetailsPageProps) => {
  const newsSlug = (await params).slug;
  const newsItem = await getNewsItem(newsSlug);

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