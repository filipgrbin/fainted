import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fainted - Video Editing for Creators",
  description: "I help creators turn raw footage into top-quality content that performs across platforms. From long-form storytelling to high-energy shorts.",
  keywords: "video editing, content creation, YouTube shorts, video production",
  authors: [{ name: "Matthew" }],
  creator: "Fainted Studio",
  publisher: "Fainted Studio",
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
