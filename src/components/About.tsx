"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";

export default function About() {
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
        <div className={styles.content}>
          <div className={`${styles.imageWrapper} ${isVisible ? styles.visible : ""}`}>
            <Image 
              src="/MN1.jpg" 
              alt="Noiva Étoile Bridal" 
              fill 
              style={{ objectFit: "cover" }} 
              sizes="(max-width: 1024px) 100vw, 50vw" 
            />
          </div>
          <div className={`${styles.textWrapper} ${isVisible ? styles.visible : ""}`}>
            <h2 className={styles.title}>
              Menos é sempre <span className={styles.highlight}>mais.</span>
            </h2>
            <p className={styles.description}>
              A Kallah existe para quem quer se sentir bem sem esforço. Nossos vestidos têm tradição na costura e um olhar contemporâneo no design.
            </p>
            <p className={styles.description}>
              Nossas coleções nascem de histórias reais, da arquitetura clássica e da convicção de que o bom gosto não grita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
