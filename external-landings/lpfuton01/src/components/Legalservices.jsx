import React from "react";
import styles from "./styles/Legalservices.module.css";
import mainImage from "./assets/legal1.webp";

const items = [
  {
    title: "Futon sob medida para o seu espaço",
    body: "Medidas, formato e espessura definidos a partir do ambiente real — ideal para canto alemão, bancos, varandas e áreas integradas.",
  },
  {
    title: "Resistente para área externa e uso intenso",
    body: "Tecidos apropriados para áreas externas, resistentes ao sol, à umidade e ao uso frequente, inclusive com pets.",
  },
  {
    title: "Conforto que se mantém com o tempo",
    body: "Estrutura pensada para não deformar com o uso contínuo, mantendo firmeza e conforto ao longo dos anos.",
  },
  {
    title: "Feito à mão, peça por peça",
    body: "Produção artesanal, sem linha industrial. Cada futon é construído com atenção aos detalhes e ao acabamento.",
  },
  {
    title: "Um investimento de longo prazo",
    body: "Não é troca anual. É uma escolha consciente para quem quer comprar uma vez e usar por muito tempo.",
  },
  {
    title: "Atendimento e acompanhamento",
    body: "Suporte do início ao pós-venda, garantindo clareza no processo e uma experiência mais tranquila.",
  }
];

const Legalservices = () => {
  return (
    <section className={`${styles.LegalservicesSection} animate-on-scroll`}>
      <div className={styles.LegalservicesContainer}>
        <div className={styles.Left}>
          <h2 className={styles.SectionTitle}>Benefícios</h2>

          <div className={styles.CardsGrid}>
            {items.map(({ title, body, Icon }, index) => (
              <div key={index} className={styles.Card}>

                <h3 className={styles.CardTitle}>{title}</h3>
                <p className={styles.CardText}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.Right}>
          <img src={mainImage} alt="Serviço destaque" className={styles.MainImage} />
        </div>
      </div>
    </section>
  );
};

export default Legalservices;
