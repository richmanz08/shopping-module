import HomeComponent from "@/components/home/home";
import NavbarComponent from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col  font-[family-name:var(--font-geist-sans)]">
      <NavbarComponent />
      <HomeComponent />
    </div>
  );
}
