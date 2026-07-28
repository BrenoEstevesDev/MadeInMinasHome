import React, { useMemo, useState } from "react";
import styles from "./styles/Galeria.module.css";

import futon1 from "./assets/futon1.jpeg";
import futon2 from "./assets/futon2.jpeg";
import futon3 from "./assets/futon3.jpeg";
import futon4 from "./assets/futon4.jpeg";
import futon5 from "./assets/futon5.jpeg";
import futon6 from "./assets/futon6.jpeg";
import futon7 from "./assets/futon7.jpeg";
import futon8 from "./assets/futon8.jpeg";
import futon13 from "./assets/futon13.jpeg";
import futon14 from "./assets/futon14.jpeg";
import futon15 from "./assets/futon15.jpeg";
import futon16 from "./assets/futon16.jpeg";
import futon17 from "./assets/futon17.jpeg";
import futon18 from "./assets/futon18.jpeg";
import futon19 from "./assets/futon19.jpeg";
import futon20 from "./assets/futon20.jpeg";
import futon21 from "./assets/futon21.jpeg";
import futon22 from "./assets/futon22.jpeg";
import futon23 from "./assets/futon23.jpeg";
import futon24 from "./assets/futon24.jpeg";
import futon26 from "./assets/futon26.jpeg";
import futon27 from "./assets/futon27.jpeg";
import futon28 from "./assets/futon28.jpeg";
import futon29 from "./assets/futon29.jpeg";
import futon30 from "./assets/futon30.jpeg";
import futon31 from "./assets/futon31.jpeg";
import futon32 from "./assets/futon32.jpeg";
import futon33 from "./assets/futon33.jpeg";
import futon35 from "./assets/futon35.jpeg";
import futon36 from "./assets/futon36.jpeg";
import futon37 from "./assets/futon37.jpeg";
import futon38 from "./assets/futon38.jpeg";
import futon39 from "./assets/futon39.jpeg";
import futon40 from "./assets/futon40.jpeg";
import futon41 from "./assets/futon41.jpeg";
import futon42 from "./assets/futon42.jpeg";
import futon43 from "./assets/futon43.jpeg";
import futon44 from "./assets/futon44.jpeg";
import futon45 from "./assets/futon45.jpeg";
import futon46 from "./assets/futon46.jpeg";

const Galeria = () => {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const futons = useMemo(
    () => [
      { id: 1, image: futon1 },
      { id: 2, image: futon2 },
      { id: 3, image: futon3 },
      { id: 4, image: futon4 },
      { id: 5, image: futon5 },
      { id: 6, image: futon6 },
      { id: 7, image: futon7 },
      { id: 8, image: futon8 },
      { id: 13, image: futon13 },
      { id: 14, image: futon14 },
      { id: 15, image: futon15 },
      { id: 16, image: futon16 },
      { id: 17, image: futon17 },
      { id: 18, image: futon18 },
      { id: 19, image: futon19 },
      { id: 20, image: futon20 },
      { id: 21, image: futon21 },
      { id: 22, image: futon22 },
      { id: 23, image: futon23 },
      { id: 24, image: futon24 },
      { id: 26, image: futon26 },
      { id: 27, image: futon27 },
      { id: 28, image: futon28 },
      { id: 29, image: futon29 },
      { id: 30, image: futon30 },
      { id: 31, image: futon31 },
      { id: 32, image: futon32 },
      { id: 33, image: futon33 },
      { id: 35, image: futon35 },
      { id: 36, image: futon36 },
      { id: 37, image: futon37 },
      { id: 38, image: futon38 },
      { id: 39, image: futon39 },
      { id: 40, image: futon40 },
      { id: 41, image: futon41 },
      { id: 42, image: futon42 },
      { id: 43, image: futon43 },
      { id: 44, image: futon44 },
      { id: 45, image: futon45 },
      { id: 46, image: futon46 },
    ],
    []
  );

  const listaAtual = showAll ? futons : futons.slice(0, 8);

  const openModal = (item) => setSelected(item);
  const closeModal = () => setSelected(null);

  const toggleShowAll = () => setShowAll((prev) => !prev);

  return (
    <section className={`${styles.galeria} animate-on-scroll`}>
      <div className={styles.galeriaContainer}>
        <div className={styles.headerRow}>
          <h2 className={styles.galeriaTitle}>Galeria de Futons</h2>
        </div>

        <div className={styles.gridContainer}>
          {listaAtual.map((item) => (
            <div key={item.id} className={styles.futonCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={item.image}
                  alt={`Futon ${item.id}`}
                  className={styles.futonImage}
                  onClick={() => openModal(item)}
                />
                <div className={styles.overlay}>
                  <button
                    type="button"
                    className={styles.viewButton}
                    onClick={() => openModal(item)}
                  >
                    Ampliar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {futons.length > 8 && (
          <div className={styles.bottomCta}>
            <button
              type="button"
              className={styles.allButton}
              onClick={toggleShowAll}
            >
              {showAll ? "Mostrar menos" : "Ver todos os futons"}
            </button>
          </div>
        )}
      </div>

      {selected && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Fechar"
            >
              ✕
            </button>

            <img
              src={selected.image}
              alt="Futon ampliado"
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria;