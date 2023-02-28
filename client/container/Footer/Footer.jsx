import styles from "./Footer.module.css";
import { BsGithub } from "react-icons/bs";

const Footer = () => (
  <div className={styles.footer}>
    <p>
      <a href="https://github.com/somanymonica/visit-kennedy-town">
        2023 Monica. All Rights reserved. <BsGithub />
      </a>
    </p>
  </div>
);

export default Footer;
