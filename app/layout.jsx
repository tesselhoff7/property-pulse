import "@/assets/styles/globals.css";
import React from "react";

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
