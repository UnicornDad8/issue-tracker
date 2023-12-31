import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import AuthProvider from "./auth/Provider";
import QueryClientProvider from "./QueryClientProvider";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <QueryClientProvider>
            <AuthProvider>
              <Navbar />
              <main className="p-5">{children}</main>
            </AuthProvider>
          </QueryClientProvider>
        </Theme>
      </body>
    </html>
  );
}
