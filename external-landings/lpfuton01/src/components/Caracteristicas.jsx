import React from "react";
import styles from "./styles/Caracteristicas.module.css";
import card1 from "./assets/car1.webp";
import card2 from "./assets/car2.webp";
import card3 from "./assets/car3.webp";
import card4 from "./assets/car4.webp";

const items = [
  {
    img: card1,
    alt: "Cada projeto começa do zero",
    title: (
      <>
        Cada projeto<br />começa do zero
      </>
    ),
  },
  {
    img: card2,
    alt: "Feito sob medida para o seu espaço",
    title: (
      <>
        Feito sob medida<br />para o seu espaço
      </>
    ),
  },
  {
    img: card3,
    alt: "Com modelos e tecidos à sua escolha",
    title: (
      <>
        Com modelos e<br />tecidos à sua<br />escolha
      </>
    ),
  },
  {
    img: card4,
    alt: "Uso real no ambiente estético e funcional",
    title: (
      <>
        Uso real no ambiente<br />
        estético e funcional
      </>
    ),
  },
];

const Caracteristicas = () => {
  return (
    <section className={`${styles.CaracteristicasSection} animate-on-scroll`}>
      <div className={styles.CaracteristicasContainer}>
        <div className={styles.IntroText}>
          <p>
            Este serviço é para quem já sabe o que procura: um{" "}
            <strong>futon feito sob medida</strong>, pensado para o seu espaço,
            com materiais resistentes, acabamento artesanal e foco em durabilidade
            — não um produto pronto de prateleira.
          </p>
        </div>

        <div className={styles.Grid}>
          {items.map((item, idx) => (
            <article key={idx} className={styles.Card} tabIndex="0">
              <div className={styles.ImageBg}>
                <img
                  src={item.img}
                  alt={item.alt}
                  className={styles.FeatureImage}
                  width="233"
                  height="310"
                  loading="lazy"
                />
              </div>

              <h2 className={styles.Title}>{item.title}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Caracteristicas;