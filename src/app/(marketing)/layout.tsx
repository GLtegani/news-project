import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import { GlobalStyle } from "../globals";

const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <html lang='en'>
        <body className={merriweather.className}>{children}</body>
      </html>
    </StyledComponentsRegistry>
  );
}
