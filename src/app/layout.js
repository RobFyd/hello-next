import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const metadata = {
  title: "My Next.js App",
  description: "A simple Next.js application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
