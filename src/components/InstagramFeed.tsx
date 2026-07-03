"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./InstagramFeed.module.css";

const instagramImages = [
  "/MN1.jpg",
  "/MN2.jpg",
  "/MN3.jpg",
  "/MN4.jpg"
];

export default function InstagramFeed() {
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
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <h2 className={styles.title}>
            Inspire-se com <span className={styles.highlight}>histórias reais.</span>
          </h2>
          <p className={styles.subtitle}>
            Acompanhe nossas coleções, bastidores e momentos especiais compartilhados por nossas clientes.
          </p>
        </div>

        <div className={styles.grid}>
          {instagramImages.map((src, index) => (
            <div 
              key={index} 
              className={`${styles.imageWrapper} ${isVisible ? styles.visible : ""}`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <Image 
                src={src} 
                alt={`Instagram Feed ${index + 1}`} 
                fill 
                style={{ objectFit: "cover" }} 
                sizes="(max-width: 600px) 50vw, 25vw" 
              />
              <div className={styles.overlay}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
