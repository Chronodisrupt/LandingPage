import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "Vigority DMSO Cream",
  description:
    "Topical Joint, Muscle Comfort - Fast Absorption, Non-Greasy, Natural Blend. Support your active lifestyle with Vigority DMSO Cream.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}