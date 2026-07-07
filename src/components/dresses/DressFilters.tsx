"use client";

import styles from "./DressFilters.module.css";

const categories = ["Todos", "Clássico", "Moderno", "Minimalista"];

interface DressFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function DressFilters({
  activeFilter,
  onFilterChange,
}: DressFiltersProps) {
  return (
    <div className={styles.filters}>
      <div className={styles.inner}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${
              activeFilter === cat ? styles.active : ""
            }`}
            onClick={() => onFilterChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
