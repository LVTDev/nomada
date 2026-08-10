import BottomGridHome from "@/components/BottomGridHome";
import EncuentroHome from "@/components/EncuentroHome";
import ExperenciaHome from "@/components/ExperenciaHome";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <EncuentroHome />
      <ExperenciaHome />
      <BottomGridHome />
    </div>
  );
}
