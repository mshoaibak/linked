import React from "react";
import Awards from "./Awards";
import Contact from "./Contact";
import Fixed from "./Fixed";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";
import SuccessStory from "./SuccessStory";

const All = () => {
  return (
    <>
      <Header />
      <Services />
      <Awards />
      <Fixed />
      <SuccessStory />
      <Contact />

      <Footer />
    </>
  );
};

export default All;
