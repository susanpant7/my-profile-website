import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Languages = () => {
  return (
    <div>
      <div className="work-experience box">
        <h2>
          <FontAwesomeIcon icon={faLanguage} /> LANGUAGES
        </h2>
        <div className="work-item">
          <ul>
            <li>English</li>
            <li>Hindi</li>
            <li>Nepali</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Languages;
