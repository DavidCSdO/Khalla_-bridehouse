"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Discover.module.css";

export default function Discover() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.wrapper}>
        {/* Buttons row — overlaps with the hero */}
        <div className={`${styles.buttons} ${isVisible ? styles.visible : ""}`}>
          <Link href="/dresses" className={styles.button}>
            Ver Coleção
          </Link>
          <Link href="/agendar" className={styles.button}>
            Agendar Visita
          </Link>
        </div>

        {/* Two-column content: text + image */}
        <div className={styles.content}>
          <div className={`${styles.textContainer} ${isVisible ? styles.visible : ""}`}>
            <p className={styles.textBlock}>
              Vestidos de noiva com desenho{" "}
              <span className={styles.highlight}>próprio</span>. Silhuetas
              limpas, tecidos nobres e o tipo de{" "}
              <span className={styles.highlight}>acabamento</span> que só se
              percebe de per<span className={styles.highlight}>to.</span>
            </p>
          </div>

          <div className={`${styles.imageWrapper} ${isVisible ? styles.visible : ""}`}>
            <Image
              src="/PG2.jpg"
              alt="Vestido de noiva Kallah com acessórios"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}