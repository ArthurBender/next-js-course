import Link from "next/link";

import NewsList from "@/components/news/news-list"
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";

import { News } from "@/types";

interface FilteredNewsPageProps {
  params: Promise<{ filter: string[] }>
}

const FilteredNewsPage = async ({ params }: FilteredNewsPageProps) => {
  const filter = (await params).filter;

  const filteredYear = filter?.[0];
  const filteredMonth = filter?.[1];
  
  let links: number[] = getAvailableNewsYears();
  let news: News[] = [];
  if (filteredYear && filteredMonth) {
    news = getNewsForYearAndMonth(filteredYear, filteredMonth);
    links = [];
  } else if (filteredYear) {
    news = getNewsForYear(filteredYear);
    links = getAvailableNewsMonths(filteredYear);
  }

  let newsContent = <p>No news found for the selected period.</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList newsList={news} />;
  }

  if ((filteredYear && !(getAvailableNewsYears() as number[]).includes(Number.parseInt(filteredYear))) ||
    (filteredMonth && !(getAvailableNewsMonths(filteredYear) as number[]).includes(Number.parseInt(filteredMonth))))
  {
    throw new Error('Invalid filter.');
  }


  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = filteredYear ? `/archive/${filteredYear}/${link}` : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {newsContent}
    </>
  )
}

export default FilteredNewsPage