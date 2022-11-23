import Footer from "components/organism/Footer";
import Header from "components/organism/Header";
import HoemPage from "pages/HomePage";
import React from "react";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Header />
      <HoemPage />
      <Footer />
    </div>
  );
}

export default App;
