import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "My Next.js App",
  description: "A simple Next.js application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
