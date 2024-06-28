import NewsList from "@/app/components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/app/lib/news";
import { ArchiveHeader } from "./pageStyle";
import Link from "next/link";

interface FilteredNewsPageAttributes {
  filter: string;
}

interface FilteredNewsPageProps {
  params: FilteredNewsPageAttributes;
}

export default function FilteredNewsPage({ params }: FilteredNewsPageProps) {
  const filter = params.filter;
  const selectedYear = filter ? filter[0] : "";
  const selectedMonth = filter ? filter[1] : "";

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error();
  }

  return (
    <>
      <ArchiveHeader>
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </ArchiveHeader>

      {newsContent}
    </>
  );
}
