import { FaWhatsapp } from "react-icons/fa";
import { LuRuler, LuSparkles, LuTruck } from "react-icons/lu";
import styles from "./styles/Investimento.module.css";
import { WHATSAPP_URL } from "./landingContent.js";

const quoteItems = [
  {
    icon: LuRuler,
    title: "Medidas do espaço",
    description:
      "Cada futon, assento ou almofada é calculado conforme o seu projeto.",
  },
  {
    icon: LuSparkles,
    title: "Tecido escolhido",
    description:
      "Indicamos a melhor opção técnica para sol, umidade e rotina de uso.",
  },
  {
    icon: LuTruck,
    title: "Produção e envio",
    description:
      "Prazo e entrega são definidos de acordo com a composição do pedido.",
  },
];

const Investimento = () => {
  return (
    <section className={`${styles.investmentSection} animate-on-scroll`}>
      <div className={styles.backgroundLines} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Investimento</p>
          <h2>
            Quanto custa um projeto sob medida para área externa?
          </h2>
          <p>
            Não trabalhamos com preço fixo porque cada ambiente pede medidas,
            tecidos e acabamentos diferentes. O orçamento é montado a partir do
            seu espaço.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span>Made In Minas Futons</span>
            <strong>Orçamento personalizado</strong>
            <strong>ATÉ 12x (COnsulte condições)</strong>
          </div>

          <div className={styles.cardBody}>
            <p className={styles.cardLabel}>Seu projeto é dividido por:</p>

            <div className={styles.itemGrid}>
              {quoteItems.map((item) => {
                const ItemIcon = item.icon;

                return (
                  <article className={styles.item} key={item.title}>
                    <ItemIcon aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className={styles.cardFooter}>
            <p>
              Envie fotos, medidas e a ideia do ambiente para receber a
              indicação certa.
            </p>
            <a className={styles.cta} href={WHATSAPP_URL}>
              <FaWhatsapp aria-hidden="true" />
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investimento;
