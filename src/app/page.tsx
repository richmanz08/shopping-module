import FooterComponent from "@/components/footer/footer";
import HomeComponent from "@/components/home/home";
import NavbarComponent from "@/components/navbar/navbar";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white items-center font-[family-name:var(--font-geist-sans)]">
      <NavbarComponent />
      <HomeComponent />
      <FooterComponent />
    </div>
  );
}
