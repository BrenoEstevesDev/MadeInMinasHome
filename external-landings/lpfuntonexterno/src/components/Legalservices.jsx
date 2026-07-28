import { LuAnchor, LuDroplets, LuLeaf, LuSun } from "react-icons/lu";
import styles from "./styles/Legalservices.module.css";

import garantiaVideo from "./assets/O tecido tem garantia_.mov";
import impermeavelVideo from "./assets/O tecido é 100_ impermeável_.mov";
import almofadasVideo from "./assets/Almofadas expostas.mov";
import garantiaPoster from "./assets/video-posters/garantia-3s.jpg";
import impermeavelPoster from "./assets/video-posters/impermeavel-2s.jpg";
import almofadasPoster from "./assets/video-posters/almofadas-2s.jpg";

const fabrics = [
  {
    icon: LuSun,
    title: "Solaris",
    description:
      "Tecido de alta performance criado para resistir à exposição prolongada ao sol, sem desbotamento ou perda de estrutura.",
  },
  {
    icon: LuAnchor,
    title: "Couro náutico",
    description:
      "Durabilidade e sofisticação para ambientes externos. Resistente à umidade, fácil de limpar e com acabamento refinado.",
  },
  {
    icon: LuLeaf,
    title: "Linho de alto desempenho",
    description:
      "Estética natural e toque confortável. Ideal para áreas cobertas ou mistas onde o estilo encontra a praticidade.",
  },
  {
    icon: LuDroplets,
    title: "Acquablock",
    description:
      "Repelente à água, resistente ao sol e de fácil limpeza. Uma opção prática para diferentes ambientes e necessidades.",
  },
];

const videos = [
  {
    title: "O tecido tem garantia?",
    src: garantiaVideo,
    poster: garantiaPoster,
  },
  {
    title: "O tecido é 100% impermeável?",
    src: impermeavelVideo,
    poster: impermeavelPoster,
  },
  {
    title: "As almofadas podem ficar expostas?",
    src: almofadasVideo,
    poster: almofadasPoster,
  },
];

const steps = [
  {
    number: "01",
    title: "Você entra em contato",
    description: "Via WhatsApp. Sem formulário, sem espera.",
  },
  {
    number: "02",
    title: "Entendemos o espaço",
    description:
      "Foto do ambiente, medidas e necessidade. Indicamos o modelo e o tecido certo para o seu projeto.",
  },
  {
    number: "03",
    title: "Orçamento sem surpresa",
    description:
      "Enviamos valor, prazo e detalhes técnicos para aprovação.",
  },
  {
    number: "04",
    title: "Produção e envio",
    description:
      "Produção nacional, com alto padrão técnico. Entrega sob consulta.",
  },
];

const Legalservices = () => {
  return (
    <>
      <section
        id="tecidos"
        className={`${styles.fabricSection} animate-on-scroll`}
      >
        <div className={styles.fabricLayout}>
          <div className={styles.fabricIntro}>
            <p className={styles.eyebrow}>Tecidos técnicos</p>
            <h2>Resistente ao uso real de sol, umidade e tempo.</h2>
            <p>
              Trabalhamos com coleções de tecidos de alta performance,
              desenvolvidos para ambientes externos com exposição ao sol, à
              chuva e ao uso intenso.
            </p>
            <p>
              Para quem busca conforto sem abrir mão da qualidade, também
              oferecemos opções em linho de alto desempenho, com estética
              natural e toque agradável para áreas cobertas ou mistas.
            </p>
          </div>

          <div className={styles.fabricCards}>
            {fabrics.map((item) => {
              const FabricIcon = item.icon;

              return (
                <article className={styles.fabricCard} key={item.title}>
                  <FabricIcon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.videoSection} animate-on-scroll`}>
        <div className={styles.darkHeader}>
          <p className={styles.eyebrow}>Dúvidas frequentes</p>
          <h2>Respostas rápidas antes do orçamento.</h2>
        </div>

        <div className={styles.videoGrid}>
          {videos.map((video) => (
            <article className={styles.videoCard} key={video.title}>
              <video
                controls
                preload="metadata"
                playsInline
                poster={video.poster}
                src={video.src}
                title={video.title}
              />
              <h3>{video.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.processSection} animate-on-scroll`}>
        <div className={styles.processHeader}>
          <p className={styles.eyebrow}>Como funciona</p>
        </div>

        <div className={styles.stepList}>
          {steps.map((step) => (
            <article className={styles.step} key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Legalservices;
