import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";


export const metadata = {
  title: {
    default: "Next.js Tutorial -- Default",
    //if no title then above is displayed
    template: "%s | DTU",
    // if title is there, "| dtu" is appended
    // absolute: used whenere you want something else

  },
  description: "Learning MetaData"
}

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
