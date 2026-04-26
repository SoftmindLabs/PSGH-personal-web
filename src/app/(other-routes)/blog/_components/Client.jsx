"use client";
import { useState } from "react";
import HeroSection from "./Hero";
import Blogs from "./Blog";

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState("All blogs");

  return (
    <>
      <HeroSection
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <Blogs activeCategory={activeCategory} />
    </>
  );
}
