import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard-next",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://onnuri-care.co.kr"),
  title: "온누리케어간병협회 | 가족 간병비 보험금 청구 서비스",
  description: "가족 간병인 등록부터 보험금 청구 서류 발급, 설계사 전달까지 간편하게 처리하세요. 온누리케어간병협회가 간병비 보험 청구를 도와드립니다.",
  keywords: "간병비 보험, 가족 간병인, 간병비 청구, 간병인 등록, 온누리케어",
  applicationName: "온누리케어간병협회",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "온누리케어간병협회 | 가족 간병비 보험금 청구",
    description: "가족 간병인 등록부터 보험금 청구까지 간편하게 처리하세요.",
    type: "website",
    siteName: "온누리케어간병협회",
    url: "https://onnuri-care.co.kr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "온누리케어간병협회 | 가족 간병비 보험금 청구",
    description: "가족 간병인 등록부터 보험금 청구까지 간편하게 처리하세요.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
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
      className={`${pretendard.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-primary/20 selection:text-primary">
        {children}
        <GoogleAnalytics gaId="G-G5J5E7XWX9" />
      </body>
    </html>
  );
}
