"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

const statsData = [
  { value: "3.000+", label: "vestidos entregues" },
  { value: "98%", label: "de satisfação" },
  { value: "15", label: "coleções exclusivas" },
  { value: "Nacional", label: "atendimento no Brasil" }
];

export default function Stats() {
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
          Números que refletem nossa <span className={styles.highlight}>dedicação.</span>
        </h2>
        
        <div className={styles.grid}>
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className={`${styles.statCard} ${isVisible ? styles.visible : ""}`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
