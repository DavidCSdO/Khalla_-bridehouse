import Image from "next/image";
import styles from "./Categories.module.css";

const categories = [
  {
    title: "Minimalistas",
    image: "/MN1.jpg",
    text: (
      <>
        - Linhas limpas, sofisticação <span className={styles.highlight}>e leveza.</span>
      </>
    ),
  },
  {
    title: "Modernos",
    image: "/LF1.jpg",
    text: (
      <>
        - Modelagens <span className={styles.highlight}>contemporâneas para</span>{" "}
        noivas autênticas.
      </>
    ),
  },
  {
    title: "Acessórios",
    image: "/ACS1.jpg",
    text: (
      <>
        - Véus, luvas, joias e <span className={styles.highlight}>detalhes que</span>{" "}
        completam o visual.
      </>
    ),
  },
];

export default function Categories() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.card}>
              <h2 className={styles.title}>{category.title}</h2>
              <div className={styles.imageWrapper}>
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className={styles.text}>{category.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
