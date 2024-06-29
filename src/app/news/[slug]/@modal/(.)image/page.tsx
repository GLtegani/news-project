import Image from "next/image";
import { NewsSlugProps } from "../../page";
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../../../dummy-news";
import { FullscreenImage } from "../../imagePageStyle";
import { ModalBackdrop, DialogModal } from "./pageStyle";

export default function InterceptedImagePage({ params }: NewsSlugProps) {
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.slug);
  if (!newsItem) {
    notFound();
  } else {
    return (
      <>
        <ModalBackdrop />
        <DialogModal open>
          <FullscreenImage>
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={800}
              height={800}
            />
          </FullscreenImage>
        </DialogModal>
      </>
    );
  }
}
