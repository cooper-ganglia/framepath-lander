import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://framepath.ai"),
  title: "Framepath — Local-First Media Asset Management",
  description:
    "Turn your organization’s existing media storage into a searchable visual library. Keep original footage, catalog, previews, and accounts on your infrastructure.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Your footage. Your storage. Your infrastructure.",
    description:
      "Find any shot your organization has ever captured. Meet Framepath, the local-first media asset management platform by Oddform.",
    url: "https://framepath.ai",
    siteName: "Framepath",
    type: "website",
    images: [
      {
        url: "/assets/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Framepath — Your media stays yours.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/social-preview.png"],
  },
  icons: { icon: "/assets/mark.png" },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
