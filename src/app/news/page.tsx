import Link from "next/link";

import { DUMMY_NEWS } from "../../../dummy-news";
import { NewsList, StyledImage } from "./pageStyle";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>

      <NewsList>
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <StyledImage
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
                width={300}
                height={300}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </NewsList>
    </>
  );
}
