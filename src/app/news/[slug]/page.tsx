import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../dummy-news";
import { NewsArticle, NewsImage } from "./pageStyle";

interface NewsSlugProps {
  params: {
    slug: string;
  };
}

export default function NewsSlug({ params }: NewsSlugProps) {
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.slug);
  if (!newsItem) {
    notFound();
  } else {
    return (
      <NewsArticle>
        <header>
          <NewsImage
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={100}
            height={100}
          />
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
      </NewsArticle>
    );
  }
}
