"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      }
    };

    if (window.scrollY > 10) {
      setHasScrolled(true);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/Background.jpg"
          alt="Noiva elegante deitada em tecido branco segurando buquê de flores"
          fill
          priority
          quality={100}
          sizes="100vw"
          style={{ objectFit: "cover" }}
          unoptimized={true}
        />

      </div>

      <div className={styles.content}>
        <h1 className={`${styles.title} ${hasScrolled ? styles.visible : ""}`}>
          <em>O vestido certo não precisa de <span className={styles.highlight}>explicação.</span></em>
        </h1>
      </div>
    </section>
  );
}
