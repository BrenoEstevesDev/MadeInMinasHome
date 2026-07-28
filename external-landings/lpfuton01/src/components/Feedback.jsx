import React, { useState, useRef } from "react";
import styles from "./styles/Feedback.module.css";
import feedback1 from "./assets/feedback1.webp";
import feedback2 from "./assets/feedback2.webp";
import feedback3 from "./assets/feedback3.webp";
import feedback4 from "./assets/feedback4.webp";
import feedback5 from "./assets/feedback5.webp";
import feedback6 from "./assets/feedback6.webp";
import feedback7 from "./assets/feedback7.webp";
import feedback8 from "./assets/feedback8.webp";


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

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth } = carouselRef.current;
      setShowArrows(scrollWidth > clientWidth);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  React.useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <section className={styles["feedback-section"]}>
      <div className={styles.container}>
        <h2 className={styles["feedback-title"]}>Feedbacks</h2>
        
        <div className={styles["carousel-container"]}>
          {showArrows && (
            <button 
              className={styles["arrow-button"]} 
              onClick={() => scroll("left")}
              aria-label="Previous feedback"
            >
              ❮
            </button>
          )}

          <div 
            className={styles["carousel-wrapper"]} 
            ref={carouselRef}
            onScroll={handleScroll}
          >
            <div className={styles["carousel-items"]}>
              {feedbackImages.map((image) => (
                <div 
                  key={image.id} 
                  className={styles["carousel-item"]}
                  onClick={() => setSelectedImage(image)}
                  style={{ cursor: "pointer" }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className={styles["feedback-image"]}
                  />
                </div>
              ))}
            </div>
          </div>

          {showArrows && (
            <button 
              className={styles["arrow-button"]} 
              onClick={() => scroll("right")}
              aria-label="Next feedback"
            >
              ❯
            </button>
          )}
        </div>
      </div>

      {selectedImage && (
        <div 
          className={styles["modal-overlay"]} 
          onClick={closeModal}
        >
          <div className={styles["modal-content"]}>
            <button 
              className={styles["modal-close"]}
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className={styles["modal-image"]}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Feedback;