import React from "react";
import ContactDetails from "./ContactDetails";
import Languages from "./Languages";
import Skills from "./Skills";

const RigthCol = () => {
  return (
    <div className="box">
      <ContactDetails />
      <Skills />
      <Languages />
    </div>
  );
};

export default RigthCol;
