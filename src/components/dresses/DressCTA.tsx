"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./DressCTA.module.css";

export default function DressCTA() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={`${styles.wrapper} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Atendimento Privativo</p>
          <h2 className={styles.title}>
            Vista antes de <span className={styles.highlight}>decidir</span>
          </h2>
          <p className={styles.description}>
            Agende uma visita à nossa loja. Sem compromisso, sem pressa.
            Uma consultora acompanha você do início ao fim.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryBtn}>
              Agendar Visita
            </Link>
            <Link href="/" className={styles.secondaryBtn}>
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
