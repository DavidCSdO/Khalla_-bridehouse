"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Benefits.module.css";

const benefits = [
  {
    title: "Atendimento individual",
    description: "Uma consultora dedicada do início ao fim. Sem pressa, sem fila."
  },
  {
    title: "Materiais nobres",
    description: "Tecidos e acabamentos que você sente na pele — literalmente."
  },
  {
    title: "Compra segura",
    description: "Pagamento protegido e rastreio do pedido em tempo real."
  },
  {
    title: "Entrega em todo o Brasil",
    description: "Enviamos com o mesmo cuidado que tivemos ao costurar."
  }
];

export default function Benefits() {
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
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${isVisible ? styles.visible : ""}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
