import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars fiction",
  description: "Star Wars story made by a fan for the fans",
  authors: [{ name: "Damien DE SOUSA" }],
  keywords: ["Star Wars", "Star Wars fiction", "Star Wars story", "Despot War"],
  creator: "Damien DE SOUSA",
  icons: "icon.png",
  openGraph: {
    type: "website",
    title: "Star Wars fiction",
    description: "Star Wars story made by a fan for the fans",
    url: "https://star-wars-stories.vercel.app",
    images: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.className} bg-starfield h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
