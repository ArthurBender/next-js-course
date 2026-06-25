import { Suspense } from "react";

import Link from "next/link";

import NewsList from "@/components/news/news-list"
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";

interface FilteredNewsPageProps {
  params: Promise<{ filter: string[] }>
}

const FilteredNewsContent = async ({year, month}: {year: string | undefined, month: string | undefined}) => {
  let news;
  if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  } else if (year) {
    news = await getNewsForYear(year);
  }

  let newsContent;
  if (news && news.length == 0) {
    newsContent = <p>No news found for the selected period.</p>;
  } else if (news && news.length > 0) {
    newsContent = <NewsList newsList={news} />;
  }

  return newsContent;
}

const FilterHeaderContent = async ({year, month}: {year: string | undefined, month: string | undefined}) => {
  const availableYears = await getAvailableNewsYears() as string[];
  let links: string[] = availableYears;
  if (year && month) {
    links = [];
  } else if (year) {
    links = getAvailableNewsMonths(year);
  }

  if ((year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month)))
  {
    throw new Error('Invalid filter.');
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  )
}

const FilteredNewsPage = async ({ params }: FilteredNewsPageProps) => {
  const filter = (await params).filter;

  const filteredYear = filter?.[0];
  const filteredMonth = filter?.[1];

  return (
    <>
      {/* <Suspense fallback={<p>Loading filter...</p>}>
      </Suspense> */}

      <Suspense fallback={<p>Loading news...</p>}>
        <FilterHeaderContent year={filteredYear} month={filteredMonth} />
        <FilteredNewsContent year={filteredYear} month={filteredMonth} />
      </Suspense>
    </>
  )
}

export default FilteredNewsPage