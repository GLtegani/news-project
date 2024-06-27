import Image from "next/image";
import { DUMMY_NEWS } from "../../../../dummy-news";

interface NewsSlugProps {
  params: {
    slug: string;
  };
}

export default function NewsSlug({ params }: NewsSlugProps) {
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.slug);
  if (!newsItem) {
    return <h1>Sorry, not found!</h1>;
  } else {
    return (
      <article>
        <header>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={60}
            height={60}
          />
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
      </article>
    );
  }
}
