"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Benefits.module.css";

const benefits = [
  {
    title: "Atendimento Exclusivo",
    description: "Consultoria personalizada para ajudar na escolha do vestido ideal."
  },
  {
    title: "Qualidade Premium",
    description: "Materiais selecionados e acabamento artesanal."
  },
  {
    title: "Compra Segura",
    description: "Pagamento protegido e acompanhamento do pedido em tempo real."
  },
  {
    title: "Entrega Nacional",
    description: "Enviamos para todo o Brasil com segurança e cuidado."
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
