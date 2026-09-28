import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingConsultationCTA } from "@/components/FloatingConsultationCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://drcraigwright.co.za"),
  title: {
    default: "Dr. Craig Wright | Homeopath & Phytotherapist | Kenilworth, Cape Town",
    template: "%s | Dr. Craig Wright Practice",
  },
  description:
    "Evidence-informed classical homeopathy, botanical phytotherapy, and clinical nutrition in Kenilworth, Cape Town. M.Tech.Hom, MSc Herb.Med. AHPCSA registered holistic healthcare.",
  keywords: [
    "Dr Craig Wright",
    "Homeopath Cape Town",
    "Phytotherapist Cape Town",
    "Herbal Medicine Kenilworth",
    "AHPCSA registered homeopath",
    "Natural medicine South Africa",
    "Chronic fatigue treatment Cape Town",
    "IBS herbal medicine",
    "Botanical dispensary Cape Town",
  ],
  authors: [{ name: "Dr. Craig Wright", url: "https://drcraigwright.co.za" }],
  creator: "Dr. Craig Wright",
  publisher: "Dr. Craig Wright Practice",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://drcraigwright.co.za",
    siteName: "Dr. Craig Wright Practice",
    title: "Dr. Craig Wright | Homeopath & Phytotherapist | Kenilworth, Cape Town",
    description:
      "Integrative classical homeopathy, botanical phytotherapy, and individualized nutrition. Over 15 years restoring vitality and root-cause healing.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Dr. Craig Wright Practice - Natural Botanical Medicine and Homeopathy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Craig Wright | Homeopath & Phytotherapist",
    description:
      "Classical Homeopathy and Botanical Medicine in Kenilworth, Cape Town. Registered with AHPCSA & SAARP.",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[#fbfaf7] dark:bg-[#0b1319] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingConsultationCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
