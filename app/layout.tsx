import Navbar from "@/components/common/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "dis·cus·sion",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`px-4 md:px-16 ${poppins.className}`}>
        <AuthProvider>
          <Toaster />
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
