import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles/Main.module.css";
import {
  PHONE_HREF,
  PHONE_LABEL,
  WHATSAPP_URL,
} from "./landingContent.js";

import logoImage from "./assets/LogoMain.webp";
import bg1 from "./assets/novasfotos/WhatsApp Image 2023-02-14 at 14.33.42 (1).jpeg";
import bg2 from "./assets/novasfotos/WhatsApp Image 2023-07-31 at 13.27.43.jpeg";
import bg3 from "./assets/novasfotos/WhatsApp Image 2023-07-31 at 13.27.45 (1).jpeg";

const backgrounds = [bg1, bg2, bg3];

const Main = () => {
  const [activeBg, setActiveBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBg((current) => (current + 1) % backgrounds.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      id="inicio"
      className={`${styles.StyleMain} animate-on-scroll`}
      style={{ backgroundImage: `url(${backgrounds[activeBg]})` }}
    >
      <div className={styles.overlay} />

      <div className={styles.Content}>
        <div className={styles.imageLogo}>
          <img
            src={logoImage}
            alt="Logo Made In Minas Futons"
            className={styles.LogoImage}
          />
        </div>

        <div className={styles.Divider}>
          <p className={styles.Eyebrow}>Linha área externa</p>
          <h1 className={styles.Title}>
            Espaços externos também merecem o encaixe perfeito.
          </h1>
          <p className={styles.Description}>
            Futons, assentos e almofadas sob medida para varandas, decks,
            áreas de piscina e lounges ao ar livre. Fabricação artesanal,
            tecido técnico, entrega para todo o Brasil.
          </p>
        </div>

        <div className={styles.Actions}>
          <a className={styles.CTA} href={WHATSAPP_URL}>
            <FaWhatsapp className={styles.WhatsappIcon} aria-hidden="true" />
            Solicitar orçamento pelo WhatsApp
          </a>
        </div>
      </div>

      <div className={styles.dots} aria-label="Trocar imagem principal">
        {backgrounds.map((_, index) => (
          <button
            type="button"
            key={index}
            className={`${styles.dot} ${index === activeBg ? styles.active : ""}`}
            onClick={() => setActiveBg(index)}
            aria-label={`Mostrar imagem ${index + 1}`}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
