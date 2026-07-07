"use client";

import { useState } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import DressesHero from "@/src/components/dresses/DressesHero";
import DressFilters from "@/src/components/dresses/DressFilters";
import DressGrid from "@/src/components/dresses/DressGrid";
import DressCTA from "@/src/components/dresses/DressCTA";

export default function DressesPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  return (
    <>
      <Navbar />
      <DressesHero />
      <DressFilters
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <DressGrid activeFilter={activeFilter} />
      <DressCTA />
      <Footer />
    </>
  );
}
