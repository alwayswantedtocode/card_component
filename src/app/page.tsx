import Image from "next/image";
import Card from "@/app/Card/page"

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] font-[family-name:var(--font-geist-sans)] relative">
      <main className="w-[100%] h-[100%] flex justify-center items-center ">
       <Card/>
      </main>
      
    </div>
  );
}
