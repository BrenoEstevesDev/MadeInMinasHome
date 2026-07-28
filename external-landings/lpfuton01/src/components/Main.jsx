import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles/Main.module.css";
import logoImage from "./assets/LogoMain.webp";

import bg1 from "./assets/bg1.webp";
import bg2 from "./assets/bg2.webp";
import bg3 from "./assets/bg3.webp";

const backgrounds = [bg1, bg2, bg3];

const Main = () => {
    const [activeBg, setActiveBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBg((prev) => (prev + 1) % backgrounds.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main
            className={`${styles.StyleMain} animate-on-scroll`}
            style={{ backgroundImage: `url(${backgrounds[activeBg]})` }}
        >
            <div className={styles.overlay} />

            <div className={styles.Content}>
                <div className={styles.imageLogo}>
                    <img
                        src={logoImage}
                        alt="Logo Made In Minas Futons"
                        className={styles.LogoImage}
                    />
                </div>

                <div className={styles.Divider}>
                    <h1 className={styles.Title}>
                        Conforto e qualidade em cada detalhe
                    </h1>
                    <p className={styles.Description}>
                        Descubra a excelência dos futons artesanais feitos com paixão
                        e dedicação em Minas Gerais.
                    </p>
                </div>

                <a
                    className={styles.CTA}
                    href="https://tintim.link/whatsapp/9aa04d95-829f-4844-afd1-9ffd42406d7b/e1187326-4900-4b28-a1ac-81ed69781383"
                >
                    <FaWhatsapp className={styles.WhatsappIcon} />
                    Faça seu orçamento pelo WhatsApp
                </a>
            </div>

            {/* DOTS */}
            <div className={styles.dots}>
                {backgrounds.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${
                            index === activeBg ? styles.active : ""
                        }`}
                        onClick={() => setActiveBg(index)}
                    />
                ))}
            </div>
        </main>
    );
};

export default Main;
