import React from "react";
//UTILITY
import { Outlet } from "react-router-dom";
//COMPONENTS
import Footer from "./Footer";
import Navbar from "./Navbar";

function PageLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default PageLayout;
