import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
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
      </body>
    </html>
  );
};

export default Mainlayout;
