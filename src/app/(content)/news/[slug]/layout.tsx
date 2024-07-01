interface NewsDetailLayoutProps {
  children: string;
  modal: string;
}

export default function NewsDetailLayout({
  children,
  modal,
}: NewsDetailLayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
