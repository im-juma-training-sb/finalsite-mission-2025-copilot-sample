import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Finalsite 2025 - Goals & Mission",
  description: "Discover Finalsite's strategic goals, mission, and vision for transforming education in 2025 and beyond.",
  keywords: ["Finalsite", "education technology", "2025 goals", "educational software", "school communication"],
  authors: [{ name: "Finalsite Team" }],
  openGraph: {
    title: "Finalsite 2025 - Goals & Mission",
    description: "Empowering educational institutions with innovative technology solutions for the digital age.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
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
