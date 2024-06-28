import Link from "next/link";
import { StyledImage, NewsItemsList } from "./style";
import { DummyNewsProps } from "../../../../dummy-news";

interface NewsListProps {
  news: DummyNewsProps[];
}

export default function NewsList({ news }: NewsListProps) {
  return (
    <NewsItemsList>
      {news.map((newsItem) => (
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
    </NewsItemsList>
  );
}
