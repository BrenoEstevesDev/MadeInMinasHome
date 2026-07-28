import "../App.css";
import { useEffect } from "react";
import Main from "../components/Main.jsx";
import Caracteristicas from "../components/Caracteristicas.jsx";
import Galeria from "../components/Galeria.jsx";
import Legalservices from "../components/Legalservices.jsx";
import Feedback from "../components/Feedback.jsx";
import Investimento from "../components/Investimento.jsx";
import Contato from "../components/Contato.jsx";
import Footer from "../components/Footer.jsx";
import styles from "./LpFuntonExterno.module.css";

export default function LpFuntonExterno() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -100px 0px" }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <Main />
      <main>
        <Caracteristicas />
        <Galeria />
        <Legalservices />
        <Feedback />
        <Investimento />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
