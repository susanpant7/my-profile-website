import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/ContactDetails.module.css";

const ContactDetails = () => {
  return (
    <div className={styles.container}>
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
      <div className={styles.row}>
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
      </div>
    </div>
  );
};

export default ContactDetails;
