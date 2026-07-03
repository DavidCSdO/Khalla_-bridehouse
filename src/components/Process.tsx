"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Process.module.css";

const processSteps = [
  {
    number: "01",
    title: "Escolha dos tecidos",
    description: "Selecionamos materiais premium que unem conforto, leveza e sofisticação."
  },
  {
    number: "02",
    title: "Design",
    description: "Cada modelo nasce a partir de estudos de tendências internacionais aliados à elegância atemporal."
  },
  {
    number: "03",
    title: "Produção",
    description: "Cada vestido passa por rigorosos processos de acabamento antes de chegar até você."
  },
  {
    number: "04",
    title: "Entrega",
    description: "Embalagem premium e acompanhamento completo até o recebimento."
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
          Como criamos cada <span className={styles.highlight}>coleção</span>
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
