import React from "react";
import styles from "./Footer.module.css";
import Logo from "../assets/images/logo.png";
import Facebook from "../assets/images/facebook.png";
import Insta from "../assets/images/insta.png";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.picBcg}>
        <nav>
          <img src={Logo} alt="What2eat" />
          <ul>
            <li>
              <a href="#">
                <p>Home</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>About Us</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Services</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Skills</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Contact Us</p>
              </a>
            </li>
          </ul>
          <div className={styles.sosmed}>
            <div className={styles.social}>
              <img src={Facebook} alt="facebook" className={styles.facebook} />
            </div>
            <div className={styles.social}>
              <img src={Insta} alt="insta" className={styles.insta} />
            </div>
          </div>
        </nav>
        <div className={styles.line}></div>
        <div className={styles.copy}>
          <p>Copyright @2021 What2Eat</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
