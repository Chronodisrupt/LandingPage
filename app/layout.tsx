import "./globals.css";

export const metadata = {
  title: "Hermon Ringworm Treatment",
  description:
    "Fast acting antifungal treatment kit designed to eliminate stubborn ringworm and fungal infections.",
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