"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.topSection}>
          <div className={styles.brandInfo}>
            <h2 className={styles.logo}>Étoile Bridal</h2>
            <p className={styles.description}>
              A Étoile Bridal nasceu com o propósito de transformar sonhos em experiências inesquecíveis, oferecendo vestidos que unem elegância, conforto e sofisticação.
            </p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Navegação</h3>
              <Link href="/" className={styles.link}>Início</Link>
              <Link href="/colecao" className={styles.link}>Coleção</Link>
              <Link href="/sobre" className={styles.link}>Sobre Nós</Link>
              <Link href="/contato" className={styles.link}>Contato</Link>
            </div>
            
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Legal</h3>
              <Link href="/termos" className={styles.link}>Termos de Uso</Link>
              <Link href="/privacidade" className={styles.link}>Privacidade</Link>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Étoile Bridal. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
