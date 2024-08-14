import "@/assets/styles/globals.css";
export const metadata = {
  title: "Property Pulse",
  keywords: "rental, property",
  description: "Find the perfect rental property",
};

const Mainlayout = ({ children }) => {
  return (
    <html lang="end">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Mainlayout;
