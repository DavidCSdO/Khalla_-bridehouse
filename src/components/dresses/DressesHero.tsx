"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./DressesHero.module.css";

export default function DressesHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/LF2.jpg"
          alt="Coleção de vestidos de noiva Kallah"
          fill
          priority
          quality={100}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "top" }}
          unoptimized
        />
        <div className={styles.overlay} />
      </div>

      <div className={`${styles.content} ${loaded ? styles.visible : ""}`}>
        <p className={styles.eyebrow}>Kallah Bride House</p>
        <h1 className={styles.title}>
          Vestidos de <span className={styles.highlight}>Noiva</span>
        </h1>
        <p className={styles.subtitle}>
          Clássicos, modernos e minimalistas. Todos com a mesma obsessão
          por tecido, corte e caimento.
        </p>
      </div>
    </section>
  );
}
