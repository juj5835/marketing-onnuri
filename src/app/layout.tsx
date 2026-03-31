import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "온누리케어 - 가족 간병 보험 청구",
  description: "가족 간병인 등록부터 보험 청구를 위한 서류 발급, 설계사 전송 서비스까지 온누리케어가 통합적으로 지원합니다.",
  openGraph: {
    title: "온누리케어 - 가족 간병 보험 청구",
    description: "가족 간병인 등록부터 보험 청구를 위한 서류 발급, 설계사 전송 서비스까지 온누리케어가 통합적으로 지원합니다.",
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
      </body>
    </html>
  );
}
