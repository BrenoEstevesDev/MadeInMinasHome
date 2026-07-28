import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles/Contato.module.css";
import logoImage from "./assets/MadeInMinasLogoVerde.webp";
import contatoImg from "./assets/futon1.jpeg";

const Contato = () => {
  return (
    <section className={`${styles.StyleMain} animate-on-scroll`}>
      <div className={styles.Content}>
        {/* LADO ESQUERDO */}
        <div className={styles.Left}>
          <div className={styles.imageLogo}>
            <img src={logoImage} alt="Logo Made In Minas Futons" className={styles.LogoImage}/>
          </div>

          <div className={styles.Divider}>
            <h1 className={styles.Title}>
              Cada futon começa com uma boa conversa.
            </h1>
            <p className={styles.Description}>
              Clique no botão abaixo, envie as informações do seu espaço e vamos
              entender juntos o melhor projeto para você.
            </p>
          </div>

          <a
                className={styles.CTA}
                href="https://tintim.link/whatsapp/9aa04d95-829f-4844-afd1-9ffd42406d7b/e1187326-4900-4b28-a1ac-81ed69781383"
            >
                <FaWhatsapp className={styles.WhatsappIcon} />
                Faça seu orçamento pelo WhatsApp
          </a>
        </div>

        <div className={styles.RightImage}>
          <img
            src={contatoImg}
            alt="Futon artesanal"
            className={styles.HeroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Contato;
