"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "Encontrar meu vestido foi muito mais do que uma compra. Foi uma experiência emocionante do início ao fim.",
    author: "Mariana S."
  },
  {
    text: "O acabamento é impecável. Recebi inúmeros elogios no dia do casamento.",
    author: "Isabela R."
  },
  {
    text: "O atendimento foi excepcional e me senti acolhida em cada etapa.",
    author: "Fernanda A."
  }
];

export default function Testimonials() {
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
          Histórias que nos <span className={styles.highlight}>inspiram.</span>
        </h2>
        
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${isVisible ? styles.visible : ""}`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.text}>{testimonial.text}</p>
              <p className={styles.author}>— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
