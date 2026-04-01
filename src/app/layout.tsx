import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "온누리케어 - 가족 간병비 보험금 청구의 모든 것",
  description: "가족간병인 등록부터 보험금 청구 서류 발급까지, 온누리케어가 한 번에 해결해 드립니다.",
  openGraph: {
    title: "온누리케어 - 가족 간병비 보험금 청구의 모든 것",
    description: "가족간병인 등록부터 보험금 청구 서류 발급까지, 온누리케어가 한 번에 해결해 드립니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col selection:bg-primary/20 selection:text-primary">
        {children}
        <GoogleAnalytics gaId="G-G5J5E7XWX9" />
      </body>
    </html>
  );
}
