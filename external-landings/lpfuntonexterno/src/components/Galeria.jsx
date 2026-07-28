import { useMemo, useState } from "react";
import styles from "./styles/Galeria.module.css";

const imageModules = import.meta.glob(
  [
    "./assets/novasfotos/*.jpg",
    "./assets/novasfotos/*.jpeg",
    "./assets/novasfotos/*.JPG",
    "./assets/novasfotos/*.JPEG",
  ],
  { eager: true, import: "default" }
);

const featuredOrder = [
  "2023-02-14 at 14.33.42",
  "2023-07-31 at 13.27.43",
  "2023-07-31 at 13.27.45 (1)",
  "2026-05-01 at 20.15.21",
  "2026-05-01 at 20.15.22 (1)",
  "2026-05-01 at 20.15.22 (2)",
  "2026-04-16 at 15.12.57",
  "2026-04-16 at 15.12.59",
];

const getFileName = (path) => path.split("/").pop() || path;

const getGalleryPriority = (path) => {
  const normalized = getFileName(path).normalize("NFC");
  const index = featuredOrder.findIndex((term) => normalized.includes(term));
  return index === -1 ? featuredOrder.length : index;
};

const getAltText = (path, index) => {
  const name = getFileName(path)
    .replace(/\.[^.]+$/, "")
    .replace(/^Cópia de /i, "")
    .replace(/^Cópia de /i, "")
    .replace(/^WhatsApp Image /i, "")
    .replace(/[_-]+/g, " ")
    .trim();

  return name ? `Projeto externo Made in Minas - ${name}` : `Projeto externo ${index + 1}`;
};

const Galeria = () => {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const projects = useMemo(() => {
    return Object.entries(imageModules)
      .map(([path, src], index) => ({
        id: path,
        image: src,
        alt: getAltText(path, index),
        priority: getGalleryPriority(path),
        name: getFileName(path),
      }))
      .sort((a, b) => {
        if (a.priority !== b.priority) return a.priority - b.priority;
        return a.name.localeCompare(b.name, "pt-BR");
      });
  }, []);

  const visibleProjects = showAll ? projects : projects.slice(0, 8);

  return (
    <section
      id="projetos"
      className={`${styles.galeria} animate-on-scroll`}
    >
      <div className={styles.galeriaContainer}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Projetos reais</p>
          <h2>Acabamentos têxteis para áreas externas de alto padrão.</h2>
        </div>

        <div className={styles.gridContainer}>
          {visibleProjects.map((item) => (
            <article key={item.id} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className={styles.image}
                  loading="lazy"
                  onClick={() => setSelected(item)}
                />
                <div className={styles.overlay}>
                  <button
                    type="button"
                    className={styles.viewButton}
                    onClick={() => setSelected(item)}
                  >
                    Ampliar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {projects.length > 8 && (
          <div className={styles.bottomCta}>
            <button
              type="button"
              className={styles.allButton}
              onClick={() => setShowAll((current) => !current)}
            >
              {showAll ? "Mostrar menos" : "Ver todos os projetos"}
            </button>
          </div>
        )}
      </div>

      {selected && (
        <div className={styles.modal} onClick={() => setSelected(null)}>
          <div
            className={styles.modalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setSelected(null)}
              aria-label="Fechar"
            >
              ×
            </button>
            <img
              src={selected.image}
              alt={selected.alt}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria;
