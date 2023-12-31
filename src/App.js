import React from "react";
import Info from "./Components/info";
import About from "./Components/About";
import Interest from "./Components/Interest";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
