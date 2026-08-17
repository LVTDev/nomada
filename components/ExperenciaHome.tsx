"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const ExperenciaHome = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".yellowIcon", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 30%",
      },
      x: 80,
      opacity: 1,
      ease: "bounce.out",
      duration: 0.7,
    });
    gsap.to(".blueIcon", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 30%",
      },
      x: -70,
      opacity: 1,
      ease: "bounce.out",
      delay: 0.7,
    });
  });
  return (
    <div ref={container} className="font-montserrat relative overflow-hidden">
      <div className="relative w-full h-32 lg:h-40">
        <Image
          alt=""
          src={"/movimento.jpg"}
          fill
          className="object-cover [object-position:50%_16%]"
        />
      </div>
      <p className="text-[22px] px-1 pt-8 lg:text-[50px] leading-8 lg:leading-16 lg:w-4/5 lg:ml-auto font-bold text-right lg:pr-8 font-work-sans lg:py-7 tracking-tighter">
        Buscando una <span className="text-pink">experiencia compartida</span>{" "}
        que fortalece redes culturales y amplía el acceso a nuevas audiencias.
      </p>
      <div className="lg:ml-10  lg:max-w-[75%]">
        <p className="text-[20px] tracking-tight font-semibold my-5 px-3 lg:px-12">
          Una manera distinta de construir comunidad...
        </p>
        <p className="mb-5 tracking-tight px-3 lg:px-12 text-[20px]">
          Cada territorio posee una identidad propia, una historia distinta y
          formas particulares de relacionarse con el cine.
        </p>
        <p className="mb-5 tracking-tight px-3 lg:px-12 text-[20px]">
          Por ello, <span className="font-bold">NÓMADA</span> desarrolla un
          modelo flexible que permite adaptar sus actividades a diferentes
          contextos, estableciendo alianzas con universidades, cineclubes,
          centros culturales, museos y organizaciones locales.
        </p>
      </div>
      <Image
        className="yellowIcon mb-3 absolute top-[22%]  lg:top-[38%] -left-6   rotate-90 scale-30 lg:scale-100"
        width={82}
        height={202}
        src={`/logo2.png`}
        alt="colored line"
      />{" "}
      <Image
        className="blueIcon mb-3 absolute bottom-[17%] lg:bottom-[6%]  -right-8   rotate-270 scale-30 lg:scale-100"
        width={82}
        height={202}
        src={`/logo3.png`}
        alt="colored line"
      />
    </div>
  );
};

export default ExperenciaHome;
