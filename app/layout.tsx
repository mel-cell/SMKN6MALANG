import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Poppins({
  weight: ["900", "800", "700", "600", "500", "400", "300", "200", "100"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMK Negeri 6 Malang ",
  description: "sekolah menengah kejuruan negeri 6 malang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
