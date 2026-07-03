"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.wrapper}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          <h2 className={styles.title}>
            Inspire-se para o seu <span className={styles.highlight}>grande dia.</span>
          </h2>
          <p className={styles.description}>
            Receba novidades, lançamentos exclusivos e conteúdos sobre tendências do universo bridal.
          </p>
          
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Digite seu melhor e-mail" 
              className={styles.input}
              required
            />
            <button type="submit" className={styles.button}>
              Quero Receber
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
