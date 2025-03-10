import { IBM_Plex_Mono } from 'next/font/google'

// https://next-view-transitions.vercel.app/#demo
import { ViewTransitions } from 'next-view-transitions'

import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider"
import siteConfig from "@/lib/siteConfig";


// optimized next fonts
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-mono",
});


export const metadata = {
  title: `${siteConfig.title}`,
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
  author: siteConfig.author,
  theme: siteConfig.theme,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};


// Main layout that will be applied to all the pages
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plexMono.className} antialiased dark:bg-[#212737] text-slate-950 dark:text-slate-50`}
      >
        <ViewTransitions>
        <ThemeProvider attribute="class" 
          defaultTheme="dark" 
          enableSystem 
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
        </ViewTransitions>
      </body>
    </html>
  );
}

