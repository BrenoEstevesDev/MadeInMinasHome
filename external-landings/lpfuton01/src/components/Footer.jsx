import React from "react";
import styles from "./styles/Footer.module.css";
import logoImage from "./assets/LogoMain.webp";
import instagramIcon from "./assets/instagram.png";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Content}>
        <div className={styles.imageLogo}>
          <img
            src={logoImage}
            alt="Logo Made In Minas Futons"
            className={styles.LogoImage}
          />
        </div>

        <div className={styles.FooterContact}>
          <p>Contato: (32) 99929-0352</p>

          <a href="mailto:contato@madeinmg.com.br">
            contato@madeinmg.com.br
          </a>

          <a
            href="https://www.instagram.com/SEUINSTAGRAM"
            target="_blank"
            rel="noreferrer"
            className={styles.InstagramLink}
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className={styles.InstagramIcon}
            />
            <span>@madeinminasfutons</span>
          </a>
        </div>

        <p className={styles.Description}>
          © {new Date().getFullYear()} Made In Minas Futons. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
