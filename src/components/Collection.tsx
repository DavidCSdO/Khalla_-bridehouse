"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Collection.module.css";

export default function Collection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  
  const initialImages = [
    "/LF2.jpg",
    "/CL2.jpg",
    "/MN2.jpg",
    "/LF1.jpg",
    "/CL1.jpg",
    "/LF3.jpg"
  ];

  const carouselImages = [...initialImages, ...initialImages.slice(0, 3)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === initialImages.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 800); // Wait for CSS transition to finish
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, initialImages.length]);

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={`${styles.title} ${isVisible ? styles.visible : ""}`}>
          A coleção
        </h2>

        <div className={styles.mainContent}>
          <div 
            className={`${styles.carouselContainer} ${isVisible ? styles.visible : ""}`}
            style={{ "--current-index": currentIndex } as React.CSSProperties}
          >
            <div className={styles.carouselTrack}>
              {carouselImages.map((src, i) => (
                <div 
                  key={i} 
                  className={`${styles.carouselSlide} ${!isTransitioning ? styles.noTransition : ""}`}
                >
                  <Image src={src} alt={`Coleção ${i + 1}`} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="(max-width: 1024px) 100vw, 55vw" />
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.rightText} ${isVisible ? styles.visible : ""}`}>
            Para quem<br />
            entende que o<br />
            vestido certo<br />
            muda tudo.
          </div>
        </div>

        <p className={`${styles.bottomText} ${isVisible ? styles.visible : ""}`}>
          Tecidos com caráter. Cortes com intenção. <span className={styles.highlight}>O que não se vê à primeira vista é justamente o que faz a diferença em cada peça da Kallah.</span>
        </p>
      </div>
    </section>
  );
}
