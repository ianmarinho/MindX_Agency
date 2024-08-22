import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import JsonData from "./data/data.json";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header id="page-top" data={landingPageData.Header} />
      <Features id="features" data={landingPageData.Features} />
      <About id="about" data={landingPageData.About} />
      <Services id="services" data={landingPageData.Services} />
      <Testimonials id="testimonials" data={landingPageData.Testimonials} />
      <Team id="team" data={landingPageData.Team} />
      <Contact id="contact" data={landingPageData.Contact} />
    </div>
  );
};

export default App;
