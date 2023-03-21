import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profilepic.jpeg";
import Education from "./Education";
import Experience from "./Experience";

const LeftCol = () => {
  return (
    <div className="leftColContainer box">
      <div className="title">
        <div className="image-container">
          <Image
            className="image"
            src={profilePic}
            alt="Picture of the author"
            width="350px"
            height="300px"
          />
        </div>
        <div className="title-container">
          <h2>SUSAN PANT</h2>
          <>Full Stack Developer</>
        </div>
      </div>
      <div className="intro">
        <h4>
          I'm a full stack developer who loves creating seamless user
          experiences. With expertise in both front-end and back-end
          development, I enjoy tackling new challenges and finding innovative
          solutions to complex problems.
        </h4>
      </div>
      <hr />
      <Experience />
      <Education />
    </div>
  );
};

export default LeftCol;
