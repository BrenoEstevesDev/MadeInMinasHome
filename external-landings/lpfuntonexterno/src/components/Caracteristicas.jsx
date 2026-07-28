import styles from "./styles/Caracteristicas.module.css";

const contexts = [
  {
    number: "01",
    title: "Decks e piscinas",
    description:
      "Futons e assentos sob medida, com tecido impermeável e resistente ao sol. Para decks de madeira, concreto ou estrutura mista.",
  },
  {
    number: "02",
    title: "Lounges e pits",
    description:
      "Assentos em U, L ou formatos irregulares para estruturas de concreto ou marcenaria embutida. Cada curva tem o seu encaixe.",
  },
  {
    number: "03",
    title: "Varandas cobertas",
    description:
      "Para ambientes protegidos, todos os modelos estão disponíveis: liso, com detalhes, almofadas decorativas e encostos modulares.",
  },
];

const Caracteristicas = () => {
  return (
    <>
      <section className={`${styles.valueSection} animate-on-scroll`}>
        <div className={styles.valueGrid}>
          <h2>Feito exclusivamente para o seu espaço.</h2>
          <div className={styles.valueText}>
            <p>
              Cada peça é desenvolvida a partir das medidas reais do ambiente,
              seja de bancadas de concreto, decks de madeira, bancos de
              alvenaria ou estruturas irregulares.
            </p>
            <p>
              Não adaptamos produtos prontos, produzimos soluções sob medida
              para o seu projeto.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.contextSection} animate-on-scroll`}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Para cada ambiente externo</p>
        </div>

        <div className={styles.contextGrid}>
          {contexts.map((item) => (
            <article className={styles.contextCard} key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Caracteristicas;
