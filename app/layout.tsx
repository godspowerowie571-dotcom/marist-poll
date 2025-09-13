import type { Metadata } from "next";
import { Sora, Lexend } from "next/font/google";
import "./globals.css";

const geistSans = Sora({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Lexend({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vote your favourite model",
  description: "Choose and vote for your favourite model.",
  robots: "noindex",
  openGraph: {
    type: "website",
    url: "https://marist-poll.netlify.app/",
    title: "Vote your favourite model",
    description: "Choose and vote for your favourite model.",
    images: ["https://marist-poll.netlify.app/man.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter",
    title: "Vote your favourite model",
    description: "Choose and vote for your favourite model.",
    images: ["https://marist-poll.netlify.app/man.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
