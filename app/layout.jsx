import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/authProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const metadata = {
  title: "Property Pulse",
  keywords: "rental, property",
  description: "Find the perfect rental property",
};

const Mainlayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="end">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default Mainlayout;
