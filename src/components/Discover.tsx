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
          <Link href="/colecao" className={styles.button}>
            Explorar Coleção
          </Link>
          <Link href="/agendar" className={styles.button}>
            Agendar Atendimento
          </Link>
        </div>

        {/* Two-column content: text + image */}
        <div className={styles.content}>
          <div className={`${styles.textContainer} ${isVisible ? styles.visible : ""}`}>
            <p className={styles.textBlock}>
              Descubra vestidos de noiva criados{" "}
              <span className={styles.highlight}>para</span> transformar o seu
              grande dia em <span className={styles.highlight}>uma</span>{" "}
              lembrança inesquecível. Design contemporâneo, acabamento
              impec<span className={styles.highlight}>ável</span> e detalhes
              feitos para emocionar.
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