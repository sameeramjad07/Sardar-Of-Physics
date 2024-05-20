import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site-config";
import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ConfettiProvider } from "@/components/providers/confetti-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en"> 
        <body className={inter.className}>
            <ConfettiProvider />
          <main>
            <ToastProvider />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
