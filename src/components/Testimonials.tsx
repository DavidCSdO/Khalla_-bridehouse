"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    text: "Experimentei em três ateliês antes. Na Kallah, soube na hora. O vestido caiu como se tivesse sido feito pra mim.",
    author: "Mariana S."
  },
  {
    text: "O tecido, a costura, o caimento. Tudo impecável. Recebi elogios a noite inteira.",
    author: "Isabela R."
  },
  {
    text: "Me senti acolhida desde o primeiro contato. Zero pressão, muita atenção.",
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
          Quem já <span className={styles.highlight}>vestiu.</span>
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
