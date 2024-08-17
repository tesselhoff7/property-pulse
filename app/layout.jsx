import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Property Pulse",
  keywords: "rental, property",
  description: "Find the perfect rental property",
};

const Mainlayout = ({ children }) => {
  return (
    <html lang="end">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Mainlayout;
