"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Process.module.css";

const processSteps = [
  {
    number: "01",
    title: "Matéria-prima",
    description: "Tecidos importados, escolhidos pelo toque e pelo caimento."
  },
  {
    number: "02",
    title: "Desenho",
    description: "Cada modelo parte de referências internacionais e passa pelo nosso filtro estético."
  },
  {
    number: "03",
    title: "Confecção",
    description: "Costura feita por quem entende que a diferença está nos milímetros."
  },
  {
    number: "04",
    title: "Entrega",
    description: "Embalagem à altura da peça. Rastreio completo até sua porta."
  }
];

export default function Process() {
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
        <h2 className={`${styles.title} ${isVisible ? styles.visible : ""}`}>
          Do tecido ao <span className={styles.highlight}>vestido</span>
        </h2>
        
        <div className={styles.grid}>
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${isVisible ? styles.visible : ""}`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
