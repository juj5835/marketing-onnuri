import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "온누리케어 - 가족 간병비 청구의 모든 것 | 가족간병인 등록 & 서류 발급",
  description: "가족 간병, 이제 정당한 보상을 받으세요! 온누리케어는 가족간병인 등록부터 까다로운 보험금 청구 서류 발급, 설계사 전송까지 한 번에 해결해 드립니다. 지금 바로 신청하고 편리하게 간병 서비스를 시작하세요.",
  openGraph: {
    title: "온누리케어 - 가족 간병비 청구의 모든 것 | 가족간병인 등록 & 서류 발급",
    description: "가족 간병, 이제 정당한 보상을 받으세요! 온누리케어는 가족간병인 등록부터 까다로운 보험금 청구 서류 발급, 설계사 전송까지 한 번에 해결해 드립니다. 지금 바로 신청하고 편리하게 간병 서비스를 시작하세요.",
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
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
