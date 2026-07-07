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
            Fique por <span className={styles.highlight}>dentro.</span>
          </h2>
          <p className={styles.description}>
            Novidades, lançamentos e bastidores direto no seu e-mail.
          </p>
          
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className={styles.input}
              required
            />
            <button type="submit" className={styles.button}>
              Inscrever
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
