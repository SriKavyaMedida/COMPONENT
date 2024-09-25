import React from "react";
import ContactForm from "./ContactForm";
import ExtendedFamily from "./ExtendedFamily";
import HeroSection from "./HeroSection";
import Ceo from "./Ceo";
import TeamSection from "./TeamSection";
import AnitsSection from "./AnitsSection"; // Import the new component

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-[100%] h-[100vh]">
        <ContactForm />
      </div>
      <HeroSection />
      <ExtendedFamily />
      <Ceo />
      <TeamSection />
      <AnitsSection /> {/* Render Anits as a separate section */}
    </>
  );
}

export default App;
