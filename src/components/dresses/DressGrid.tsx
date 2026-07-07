"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./DressGrid.module.css";

export interface Dress {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  tag?: string;
}

const allDresses: Dress[] = [
  {
    id: "classico-1",
    name: "Vénus Clássico",
    category: "Clássico",
    price: "A partir de R$ 8.900",
    image: "/CL1.jpg",
    tag: "Bestseller",
  },
  {
    id: "classico-2",
    name: "Artemis Rendado",
    category: "Clássico",
    price: "A partir de R$ 12.500",
    image: "/CL2.jpg",
  },
  {
    id: "classico-3",
    name: "Athena Imperial",
    category: "Clássico",
    price: "A partir de R$ 15.200",
    image: "/CL3.jpg",
    tag: "Novo",
  },
  {
    id: "moderno-1",
    name: "Luna Contemporânea",
    category: "Moderno",
    price: "A partir de R$ 7.800",
    image: "/LF1.jpg",
  },
  {
    id: "moderno-2",
    name: "Aurora Estruturada",
    category: "Moderno",
    price: "A partir de R$ 9.400",
    image: "/LF2.jpg",
    tag: "Bestseller",
  },
  {
    id: "moderno-3",
    name: "Stella Avant-Garde",
    category: "Moderno",
    price: "A partir de R$ 11.000",
    image: "/LF3.jpg",
  },
  {
    id: "minimalista-1",
    name: "Serena Pura",
    category: "Minimalista",
    price: "A partir de R$ 6.500",
    image: "/MN1.jpg",
    tag: "Novo",
  },
  {
    id: "minimalista-2",
    name: "Iris Essencial",
    category: "Minimalista",
    price: "A partir de R$ 7.200",
    image: "/MN2.jpg",
  },
  {
    id: "minimalista-3",
    name: "Flora Minimalista",
    category: "Minimalista",
    price: "A partir de R$ 8.100",
    image: "/MN3.jpg",
  },
];

interface DressGridProps {
  activeFilter: string;
}

export default function DressGrid({ activeFilter }: DressGridProps) {
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
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredDresses =
    activeFilter === "Todos"
      ? allDresses
      : allDresses.filter((d) => d.category === activeFilter);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.wrapper}>
        <p className={styles.count}>
          {filteredDresses.length}{" "}
          {filteredDresses.length === 1 ? "vestido" : "vestidos"} encontrados
        </p>

        <div className={styles.grid}>
          {filteredDresses.map((dress, index) => (
            <div
              key={dress.id}
              className={`${styles.card} ${isVisible ? styles.visible : ""}`}
              style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={dress.image}
                  alt={dress.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                />

                {dress.tag && (
                  <span className={styles.tag}>{dress.tag}</span>
                )}

                <div className={styles.overlay}>
                  <Link href="/contact" className={styles.provaBtn}>
                    Agendar Prova
                  </Link>
                  <button className={styles.detailBtn}>Ver Detalhes</button>
                </div>
              </div>

              <div className={styles.info}>
                <h3 className={styles.name}>{dress.name}</h3>
                <p className={styles.category}>{dress.category}</p>
                <p className={styles.price}>{dress.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
