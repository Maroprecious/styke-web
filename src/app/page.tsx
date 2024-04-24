import { Header } from "@/components/header";
import { Hero } from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col ">
      <Header />
      <Hero />
    </main>
  );
}
