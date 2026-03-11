import { Oxanium, Poppins } from "next/font/google";
import "./globals.css";
import { StarField } from "@/components/chronoverse";
import TerminalTransition from "@/components/TerminalTransition";
import NeuralLink from "@/components/NeuralLink";
import { AuthProvider } from "@/context/AuthContext";
import SlidingDisclaimer from "@/components/SlidingDisclaimer";
import GlobalLogo from "@/components/GlobalLogo";
import { Suspense } from "react";
import SubmissionDisclaimer from "@/components/SubmissionDisclaimer";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oxanium",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Ingenium",
  description: "Techno Cultural Festival",
  verification: {
    google: "F3N8mKNsuT46OCayL-eJ-7AQJTwXaUCdmjmJ1GRC6LI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oxanium.variable} ${poppins.variable} antialiased overflow-x-hidden`}
      >
        <AuthProvider>
          <div className="fixed inset-0 z-0 pointer-events-none">
            <StarField />
          </div>

          <NeuralLink />
          <SlidingDisclaimer />
          {/* <SubmissionDisclaimer /> */}
          <div className="relative z-10">
            <TerminalTransition>{children}</TerminalTransition>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
