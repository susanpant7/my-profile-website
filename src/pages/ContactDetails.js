import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileAlt,
  faMapMarkerAlt,
  faFileUser,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/ContactDetails.module.css";
import DownloadPDF from "./DownloadPdf";

const ContactDetails = () => {
  return (
    <div className="box">
      <div className={styles.row}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className={styles.info}>
          <p>susan.pant7@gmail.com</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faMobileAlt} />
        </div>
        <div className={styles.info}>
          <p>+977 9846514741</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </div>
        <div className={styles.info}>
          <p>Kathmandu, Nepal</p>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.icon}>
          <a href="https://www.facebook.com/susan.pant.58">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>

        <div className={styles.icon}>
          <a href="https://www.instagram.com/susan.pant7/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className={styles.icon}>
          <a href="https://www.linkedin.com/in/susan-pant-518293170/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        <div className={styles.icon}>
          <DownloadPDF pdfUrl="susan_resume_1.pdf" />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
