import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <div className="work-experience box">
      <h2>
        <FontAwesomeIcon icon={faGraduationCap} /> EDUCATION
      </h2>
      <div className="work-item">
        <h3>Bachelors in Electronics And Communication Engineering</h3>
        <p>Paschimanchal Engineering Campus ( TU, IOE), Pokhara, Nepal</p>
        <p>2011 - 2015</p>
      </div>
    </div>
  );
};

export default Education;
