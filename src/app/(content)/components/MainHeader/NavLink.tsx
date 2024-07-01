"use client";

import { usePathname } from "next/navigation";
import { ActiveLink, StandardLink } from "./style";

interface NavLinkProps {
  link: string;
  children: string;
}

export default function NavLink({ link, children }: NavLinkProps) {
  const path = usePathname();

  if (path === link) {
    return <ActiveLink href={link}>{children}</ActiveLink>;
  } else {
    return <StandardLink href={link}>{children}</StandardLink>;
  }
}
