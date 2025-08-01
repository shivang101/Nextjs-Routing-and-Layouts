import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* <ErrorWrapper> */}
        {children}
        {/* </ErrorWrapper> */}
        <Footer />
      </body>
    </html>
  );
}
