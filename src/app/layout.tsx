import { Analytics } from "@vercel/analytics/react";
import Navigation from "@/components/navbar/Navigation";
import Container from "@/components/ui/Container";
import "./globals.css";
import { figtree, inconsolata, inter, karla, syne } from "@/style/fonts";
export const metadata = {
  title: "Callum - develop, design",
  description: "Building a better web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${figtree.variable} ${karla.variable} ${inconsolata.variable} ${syne.variable}`}
    >
      <body className="text-foreground bg-background font-sans">
        <Container className="mb-32" intent={"wrapper"}>
          <Navigation />
          <Container intent={"single"}>{children}</Container>
        </Container>
        <Analytics />
      </body>
    </html>
  );
}
