import { Outfit } from 'next/font/google'
 

import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider"
import siteConfig from "@/lib/siteConfig";

// If loading a variable font, you don't need to specify the font weight
const outfit = Outfit({ subsets: ['latin'] })

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-ibm antialiased text-slate-950 dark:text-slate-50`}
      >
        <ThemeProvider attribute="class" 
          defaultTheme="dark" 
          enableSystem 
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

