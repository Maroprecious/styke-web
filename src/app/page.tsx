"use client";
import { PlacementExample } from "@/components/drawer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero-section";
import { useMediaQuery } from "@/hooks/usemediaquery";
import Image from "next/image";

export default function Home() {
  const matches = useMediaQuery("(min-width: 820px)");
  return (
    <main className="w-full flex flex-col ">
      {matches ? <Header /> : <PlacementExample />}
      <Hero />
    </main>
  );
}
