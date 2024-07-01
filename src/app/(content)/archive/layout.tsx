import { ArchiveFilterSection } from "./layoutStyle";

interface ArchiveLayoutProps {
  archive: string;
  latest: string;
}

export default function ArchiveLayout({ archive, latest }: ArchiveLayoutProps) {
  return (
    <div>
      <h1>News Archive</h1>
      <ArchiveFilterSection>{archive}</ArchiveFilterSection>

      <section id='archive-latest'>{latest}</section>
    </div>
  );
}
