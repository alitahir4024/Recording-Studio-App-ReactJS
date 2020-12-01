import React from "react";
import "./app.css";
import NavBar from "./NavBar/NavBar.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import Services from "./Services/Services.jsx";
import Animation from "./Animation/Animation.jsx";
import WhyUs from "./WhyUs/WhyUs.jsx";
import ArtistAnimation from "./ArtistAnimation/ArtistAnimation.jsx";
import Clients from "./Clients/Clients.jsx";
import Footer from "./Footer/Footer.jsx";

class RecordingStudioApp extends React.Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <LandingPage />
        <Services />
        <Animation />
        <WhyUs />
        <ArtistAnimation />
        <Clients />
        <Footer />
      </div>
    );
  }
}

export default RecordingStudioApp;
