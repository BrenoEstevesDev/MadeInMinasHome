import { FaWhatsapp } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
import styles from "./styles/Contato.module.css";
import {
  INSTAGRAM_LABEL,
  INSTAGRAM_URL,
  PHONE_HREF,
  PHONE_LABEL,
  WHATSAPP_URL,
} from "./landingContent.js";

const Contato = () => {
  return (
    <section
      id="contato"
      className={`${styles.finalCtaSection} animate-on-scroll`}
    >
      <LuShieldCheck aria-hidden="true" className={styles.finalIcon} />
      <h2>Pronto para transformar seu espaço externo?</h2>
      <p>Cada projeto começa com uma conversa.</p>
      <a className={styles.primaryCta} href={WHATSAPP_URL}>
        <FaWhatsapp aria-hidden="true" />
        Falar com a Mari no WhatsApp
      </a>

    </section>
  );
};

export default Contato;
