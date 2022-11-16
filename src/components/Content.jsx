import React from "react";
import "../assets/styles/Content.css";
import { About } from "../pages/About";
import { Clients } from "../pages/Clients";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";

export const Content = ({ page }) => {
  const renderPage = (contentPage) => {
    switch (contentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "clients":
        return <Clients />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return <section className="content">{renderPage(page)}</section>;
};
