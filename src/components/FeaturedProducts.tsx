"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./FeaturedProducts.module.css";

const featuredImages = [
  { src: "/CL3.jpg", title: "Elegance Clássico" },
  { src: "/LF3.jpg", title: "Modern Romance" },
  { src: "/MN3.jpg", title: "Minimalista Chic" }
];

export default function FeaturedProducts() {
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
            Os favoritos da <span className={styles.highlight}>coleção.</span>
          </h2>
          <p className={styles.subtitle}>Conheça os vestidos mais desejados pelas nossas clientes.</p>
        </div>

        <div className={styles.grid}>
          {featuredImages.map((product, index) => (
            <div 
              key={index} 
              className={`${styles.productCard} ${isVisible ? styles.visible : ""}`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={product.src} 
                  alt={product.title} 
                  fill 
                  style={{ objectFit: "cover" }} 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
                <div className={styles.overlay}>
                  <button className={styles.discoverButton}>Descobrir</button>
                </div>
              </div>
              <h3 className={styles.productTitle}>{product.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
