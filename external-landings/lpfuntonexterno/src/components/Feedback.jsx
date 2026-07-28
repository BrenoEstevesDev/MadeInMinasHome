import { useEffect, useRef, useState } from "react";
import styles from "./styles/Feedback.module.css";

import feedback1 from "./assets/feedback1.webp";
import feedback2 from "./assets/feedback2.webp";
import feedback3 from "./assets/feedback3.webp";
import feedback4 from "./assets/feedback4.webp";
import feedback5 from "./assets/feedback5.webp";
import feedback6 from "./assets/feedback6.webp";
import feedback7 from "./assets/feedback7.webp";
import feedback8 from "./assets/feedback8.webp";
import feedback9 from "./assets/feedback9.webp";

const feedbackImages = [
  { id: 1, src: feedback1, alt: "Feedback 1" },
  { id: 2, src: feedback2, alt: "Feedback 2" },
  { id: 3, src: feedback3, alt: "Feedback 3" },
  { id: 4, src: feedback4, alt: "Feedback 4" },
  { id: 5, src: feedback5, alt: "Feedback 5" },
  { id: 6, src: feedback6, alt: "Feedback 6" },
  { id: 7, src: feedback7, alt: "Feedback 7" },
  { id: 8, src: feedback8, alt: "Feedback 8" },
];

const Feedback = () => {
  const carouselRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleScrollState = () => {
    if (!carouselRef.current) return;

    const { scrollWidth, clientWidth } = carouselRef.current;
    setShowArrows(scrollWidth > clientWidth);
  };

  const scroll = (direction) => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScrollState();
    window.addEventListener("resize", handleScrollState);

    return () => window.removeEventListener("resize", handleScrollState);
  }, []);

  return (
    <section className={`${styles.feedbackSection} animate-on-scroll`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Depoimentos</p>
          <h2>Feedbacks</h2>
        </div>

        <div className={styles.carouselContainer}>
          {showArrows && (
            <button
              type="button"
              className={styles.arrowButton}
              onClick={() => scroll("left")}
              aria-label="Feedback anterior"
            >
              ‹
            </button>
          )}

          <div
            className={styles.carouselWrapper}
            ref={carouselRef}
            onScroll={handleScrollState}
          >
            <div className={styles.carouselItems}>
              {feedbackImages.map((image) => (
                <button
                  type="button"
                  key={image.id}
                  className={styles.carouselItem}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={styles.feedbackImage}
                    loading="lazy"
                    onLoad={handleScrollState}
                  />
                </button>
              ))}
            </div>
          </div>

          {showArrows && (
            <button
              type="button"
              className={styles.arrowButton}
              onClick={() => scroll("right")}
              aria-label="Próximo feedback"
            >
              ›
            </button>
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Feedback;
