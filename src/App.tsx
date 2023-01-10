import React, { useEffect, useRef } from "react";

import { Banner } from "./components/banner";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header";

import WOW from "wowjs";
import { Partners } from "./components/partners";
import { Benefits } from "./components/benefits";
import { Map } from "./components/map";

function App() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <Partners />
      <Benefits />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
