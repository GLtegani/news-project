"use client";
import Image from "next/image";
import { NewsSlugProps } from "../../page";
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../../../../dummy-news";
import { FullscreenImage } from "../../imagePageStyle";
import { ModalBackdrop, DialogModal } from "./pageStyle";
import { useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }: NewsSlugProps) {
  const router = useRouter();

  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === params.slug);
  if (!newsItem) {
    notFound();
  } else {
    return (
      <>
        <ModalBackdrop onClick={router.back} />
        <DialogModal open>
          <FullscreenImage>
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={800}
              height={800}
              priority
            />
          </FullscreenImage>
        </DialogModal>
      </>
    );
  }
}
